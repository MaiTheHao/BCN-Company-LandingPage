import React from 'react';
import styles from './FQASSearch.module.scss';
import { montserrat, open_sans } from '@/app/fonts';
import { IFAQ } from '@/interfaces/faqs';

interface SearchResultsProps {
	results: IFAQ[];
	totalResultsCount: number;
}

export default function SearchResults({ results, totalResultsCount }: SearchResultsProps) {
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
