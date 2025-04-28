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
}

export function useFuzzySearch(data: FAQ[], options: UseFuzzySearchOptions = {}): UseFuzzySearchResult {
	const { debounceMs = 300, initialDisplayCount = 6, ...searchOptions } = options;

	const [query, setQuery] = useState('');
	const [filteredData, setFilteredData] = useState<FAQ[]>(data);
	const [displayedResults, setDisplayedResults] = useState<FAQ[]>([]);
	const [loading, setLoading] = useState(false);
	const [loadingMore, setLoadingMore] = useState(false);
	const [displayCount, setDisplayCount] = useState(initialDisplayCount);

	// Setup fuzzy search with debounce
	const debouncedSearch = useCallback(
		debounce((searchQuery: string) => {
			setLoading(true);

			try {
				if (!searchQuery.trim()) {
					setFilteredData(data);
				} else {
					const searchResults = fuzzySearch<FAQ>(searchQuery, data, {
						keys: ['title', 'description', 'categories'],
						...searchOptions,
					});

					setFilteredData(searchResults.map((result) => result.item));
				}
			} finally {
				setLoading(false);
			}
		}, debounceMs),
		[data, searchOptions, debounceMs]
	);

	// Trigger search when query changes
	useEffect(() => {
		debouncedSearch(query);

		return () => {
			debouncedSearch.cancel();
		};
	}, [query, debouncedSearch]);

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
	};
}
