import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { fuzzySearch, FuzzySearchOptions } from '@/utils/fuzzySearch';
import { FAQ } from '@/interfaces/faqs';

interface UseFuzzySearchOptions extends FuzzySearchOptions {
	debounceMs?: number;
	initialDisplayCount?: number;
}

interface UseFuzzySearchResult {
	query: string;
	setQuery: (query: string) => void;
	results: FAQ[];
	filteredData: FAQ[];
	displayedResults: FAQ[];
	displayCount: number;
	setDisplayCount: (count: number) => void;
	loading: boolean;
	loadMoreResults: () => void;
	loadingMore: boolean;
	hasMoreResults: boolean;
	totalResultsCount: number;
	selectedCategories: string[];
	setSelectedCategories: (categories: string[]) => void;
	allCategories: string[];
}

export function useFuzzySearch(data: FAQ[], options: UseFuzzySearchOptions = {}): UseFuzzySearchResult {
	const { debounceMs = 300, initialDisplayCount = 6, ...searchOptions } = options;

	const [query, setQuery] = useState('');
	const [filteredData, setFilteredData] = useState<FAQ[]>(data);
	const [displayedResults, setDisplayedResults] = useState<FAQ[]>([]);
	const [loading, setLoading] = useState(false);
	const [loadingMore, setLoadingMore] = useState(false);
	const [displayCount, setDisplayCount] = useState(initialDisplayCount);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	// Extract all unique categories from data
	const allCategories = Array.from(new Set(data.flatMap((item) => item.categories || []))).sort();

	// Filter data based on search query and categories
	const filterData = useCallback(
		(searchQuery: string, categories: string[]) => {
			setLoading(true);

			try {
				// First filter by search query
				let results = data;
				if (searchQuery.trim()) {
					results = fuzzySearch<FAQ>(searchQuery, data, {
						keys: ['title', 'description', 'categories'],
						...searchOptions,
					}).map((result) => result.item);
				}

				// Then filter by categories if any are selected
				if (categories.length > 0) {
					results = results.filter((item) =>
						item.categories?.some((category) => categories.includes(category))
					);
				}

				setFilteredData(results);
			} finally {
				setLoading(false);
			}
		},
		[data, searchOptions]
	);

	// Setup debounced search
	const debouncedSearch = useCallback(
		debounce((searchQuery: string, categories: string[]) => {
			filterData(searchQuery, categories);
		}, debounceMs),
		[filterData, debounceMs]
	);

	// Trigger search when query or categories change
	useEffect(() => {
		debouncedSearch(query, selectedCategories);

		return () => {
			debouncedSearch.cancel();
		};
	}, [query, selectedCategories, debouncedSearch]);

	// Update displayed results when filtered data or display count changes
	useEffect(() => {
		setDisplayedResults(filteredData.slice(0, displayCount));
		setLoadingMore(false);
	}, [filteredData, displayCount]);

	// Load more results function
	const loadMoreResults = useCallback(() => {
		setLoadingMore(true);
		setDisplayCount((prev) => prev + (searchOptions.maxResults || initialDisplayCount));
	}, [searchOptions.maxResults, initialDisplayCount]);

	const hasMoreResults = filteredData.length > displayedResults.length;

	return {
		query,
		setQuery,
		results: displayedResults,
		filteredData,
		displayedResults,
		displayCount,
		setDisplayCount,
		loading,
		loadMoreResults,
		loadingMore,
		hasMoreResults,
		totalResultsCount: filteredData.length,
		selectedCategories,
		setSelectedCategories,
		allCategories,
	};
}
