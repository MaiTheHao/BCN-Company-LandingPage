'use client';
import React, { useState, useEffect, useCallback, Suspense } from 'react';
import styles from './FQASSearch.module.scss';
import Image from 'next/image';
import { montserrat, open_sans } from '@/app/fonts';
import debounce from 'lodash.debounce';
import { FAQ, SearchResult, SearchOptions } from '@/interfaces/faqs';

function ResultsLoading() {
	return (
		<li className={styles.loading}>
			<div className={styles.loading_pulse}></div>
		</li>
	);
}

function LoadMoreButton({ onClick, isLoading }: { onClick: () => void; isLoading: boolean }) {
	return (
		<div className={styles.load_more_container}>
			<button
				className={`${styles.load_more_button} ${montserrat.className}`}
				onClick={onClick}
				disabled={isLoading}
			>
				{isLoading ? 'Đang tải...' : 'Tải thêm kết quả'}
			</button>
		</div>
	);
}

function SearchResults({ results, totalResultsCount }: { results: FAQ[]; totalResultsCount: number }) {
	return (
		<>
			<div className={styles.results_wrapper}>
				<ul className={styles.resutls}>
					{results.map((item, index) => (
						<li key={index} className={styles.result_item}>
							<h3 className={`${montserrat.className} font-semibold`}>{item.title}</h3>
							<p className={`${open_sans.className}`}>{item.description}</p>
						</li>
					))}
				</ul>
			</div>
			{results.length > 0 && (
				<p className={`${styles.results_count} ${montserrat.className} font-regular`}>
					Hiển thị {results.length} / {totalResultsCount} kết quả
				</p>
			)}
		</>
	);
}

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
	const [filteredData, setFilteredData] = useState<FAQ[]>([]);
	const [displayedResults, setDisplayedResults] = useState<FAQ[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [loadingMore, setLoadingMore] = useState(false);
	const [displayCount, setDisplayCount] = useState(6);

	const searchOptions: SearchOptions = {
		caseSensitive: false,
		fuzzy: true,
		maxResults: 6,
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const faqData = await fetchFAQData();
				setData(faqData);
				setFilteredData(faqData);
				setDisplayedResults(faqData.slice(0, displayCount));
				setIsLoading(false);
			} catch (error) {
				console.error('Error fetching FAQ data:', error);
				setIsLoading(false);
			}
		};

		fetchData();
	}, [displayCount]);

	const debouncedSearch = useCallback(
		debounce((searchQuery: string) => {
			if (searchQuery.trim() === '') {
				setFilteredData(data);
				setDisplayedResults(data.slice(0, displayCount));
				return;
			}

			const filtered = data.filter(
				(item) =>
					item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
					item.description.toLowerCase().includes(searchQuery.toLowerCase())
			);

			const searchResult: SearchResult = {
				results: filtered,
				count: filtered.length,
				query: searchQuery,
			};

			setFilteredData(filtered);
			setDisplayedResults(filtered.slice(0, displayCount));
		}, 300),
		[data, displayCount]
	);

	useEffect(() => {
		debouncedSearch(query);

		return () => {
			debouncedSearch.cancel();
		};
	}, [query, debouncedSearch]);

	useEffect(() => {
		setDisplayedResults(filteredData.slice(0, displayCount));
		setLoadingMore(false);
	}, [filteredData, displayCount]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		setDisplayCount(searchOptions.maxResults ?? 6);
	};

	const loadMoreResults = () => {
		setLoadingMore(true);
		setDisplayCount((prev) => prev + (searchOptions.maxResults ?? 6));
	};

	const hasMoreResults = filteredData.length > displayedResults.length;

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
				{isLoading ? (
					<ResultsLoading />
				) : (
					<SearchResults results={displayedResults} totalResultsCount={filteredData.length} />
				)}
			</Suspense>

			{hasMoreResults && !isLoading && <LoadMoreButton onClick={loadMoreResults} isLoading={loadingMore} />}
		</>
	);
}

export default FQASSearch;
