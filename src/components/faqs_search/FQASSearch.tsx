'use client';
import React, { useState, useEffect, Suspense } from 'react';
import styles from './FQASSearch.module.scss';
import Image from 'next/image';
import { open_sans } from '@/app/fonts';
import { FAQ, SearchOptions } from '@/interfaces/faqs';
import { fetchFAQData } from '@/lib/FQASSearch.lib';
import ResultsLoading from './ResultsLoading';
import LoadMoreButton from './LoadMoreButton';
import SearchResults from './SearchResults';
import CategoryFilter from './CategoryFilter';
import { useFuzzySearch } from '@/hooks/useFuzzySearch';

type Props = {};

function FQASSearch({}: Props) {
	const [data, setData] = useState<FAQ[]>([]);
	const [isDataLoading, setIsDataLoading] = useState(true);

	const searchOptions: SearchOptions = {
		caseSensitive: false,
		fuzzy: true,
		threshold: 0.3,
		maxResults: 6,
	};

	const {
		query,
		setQuery,
		results: displayedResults,
		loading: isSearching,
		loadMoreResults,
		loadingMore,
		hasMoreResults,
		totalResultsCount,
		selectedCategories,
		setSelectedCategories,
		allCategories,
	} = useFuzzySearch(data, {
		debounceMs: 300,
		initialDisplayCount: searchOptions.maxResults || 6,
		caseSensitive: searchOptions.caseSensitive,
		threshold: searchOptions.threshold,
		maxResults: searchOptions.maxResults,
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const faqData = await fetchFAQData();
				setData(faqData);
				setIsDataLoading(false);
			} catch (error) {
				console.error('Error fetching FAQ data:', error);
				setIsDataLoading(false);
			}
		};

		fetchData();
	}, []);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const isLoading = isDataLoading || isSearching;

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

			{!isDataLoading && (
				<CategoryFilter
					categories={allCategories}
					selectedCategories={selectedCategories}
					onCategoryChange={setSelectedCategories}
				/>
			)}

			<Suspense fallback={<ResultsLoading />}>
				{isLoading ? (
					<ResultsLoading />
				) : (
					<SearchResults results={displayedResults} totalResultsCount={totalResultsCount} />
				)}
			</Suspense>

			{hasMoreResults && !isLoading && <LoadMoreButton onClick={loadMoreResults} isLoading={loadingMore} />}
		</>
	);
}

export default FQASSearch;
