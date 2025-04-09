'use client';
import React, { useState, useEffect, useCallback, Suspense } from 'react';
import styles from './FQASSearch.module.scss';
import Image from 'next/image';
import { montserrat, open_sans } from '@/app/fonts';
import debounce from 'lodash.debounce';
import { FAQ, SearchResult, SearchOptions } from '@/interfaces/faqs';

// Separate component for loading state
function ResultsLoading() {
	return (
		<li className={styles.loading}>
			<div className={styles.loading_pulse}></div>
		</li>
	);
}

// Separate component for the results to wrap with Suspense
function SearchResults({ results }: { results: FAQ[] }) {
	return (
		<ul className={styles.resutls}>
			{results.map((item, index) => (
				<li key={index} className={styles.result_item}>
					<h3 className={`${montserrat.className} font-semibold`}>{item.title}</h3>
					<p className={`${open_sans.className}`}>{item.description}</p>
				</li>
			))}
		</ul>
	);
}

// Data fetching function that returns a promise
function fetchFAQData(): Promise<FAQ[]> {
	return fetch('/data/faqs.json').then((response) => {
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		return response.json();
	});
}

type Props = {};

function FQASSearch({}: Props) {
	const [query, setQuery] = useState('');
	const [data, setData] = useState<FAQ[]>([]);
	const [results, setResults] = useState<FAQ[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const searchOptions: SearchOptions = {
		caseSensitive: false,
		fuzzy: true,
		maxResults: 6,
	};

	// Fetch data from public folder
	useEffect(() => {
		const fetchData = async () => {
			try {
				const faqData = await fetchFAQData();
				setData(faqData);
				setResults(faqData.slice(0, searchOptions.maxResults));
				setIsLoading(false);
			} catch (error) {
				console.error('Error fetching FAQ data:', error);
				setIsLoading(false);
			}
		};

		fetchData();
	}, [searchOptions.maxResults]);

	const debouncedSearch = useCallback(
		debounce((searchQuery: string) => {
			if (searchQuery.trim() === '') {
				setResults(data.slice(0, searchOptions.maxResults));
				return;
			}

			const filteredResults = data
				.filter(
					(item) =>
						item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
						item.description.toLowerCase().includes(searchQuery.toLowerCase())
				)
				.slice(0, searchOptions.maxResults);

			const searchResult: SearchResult = {
				results: filteredResults,
				count: filteredResults.length,
				query: searchQuery,
			};

			setResults(searchResult.results);
		}, 300),
		[data, searchOptions.maxResults]
	);

	useEffect(() => {
		debouncedSearch(query);

		return () => {
			debouncedSearch.cancel();
		};
	}, [query, debouncedSearch]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	return (
		<>
			<div className={`${styles.search} ${open_sans.className} font-regular`}>
				<input
					type='text'
					placeholder='Tìm kiếm ngay những điều đang cản trở bạn ...'
					className={styles.search_input}
					value={query}
					onChange={handleSearch}
				/>
				<i>
					<Image src='/svgs/icons/search.svg' fill alt='Tìm kiếm' />
				</i>
			</div>

			<Suspense fallback={<ResultsLoading />}>
				{isLoading ? <ResultsLoading /> : <SearchResults results={results} />}
			</Suspense>
		</>
	);
}

export default FQASSearch;
