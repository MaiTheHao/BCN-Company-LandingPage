import React from 'react';
import styles from './PaginateBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface PaginateBarProps {
	page: number;
	total: number;
	limit: number;
	onNext: () => void;
	onPrev: () => void;
	onGotoPage: (page: number) => void;
	className?: string;
}

function getPageNumbers(current: number, totalPages: number) {
	let start = Math.max(1, current - 2);
	let end = Math.min(totalPages, start + 4);
	if (end - start < 4) {
		start = Math.max(1, end - 4);
	}
	const pages = [];
	for (let i = start; i <= end; i++) {
		pages.push(i);
	}
	return pages;
}

function PaginateBar({ page, total, limit, onNext, onPrev, onGotoPage, className = '' }: PaginateBarProps) {
	const totalPages = Math.ceil(total / limit);
	if (totalPages <= 1) return null;

	const pages = getPageNumbers(page, totalPages);

	return (
		<div className={`${styles.paginateBar} ${className}`}>
			<button className={styles.navBtn} onClick={onPrev} disabled={page <= 1} aria-label='Previous'>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
			{pages.map((p) => (
				<button
					key={p}
					className={`${styles.pageBtn} ${p === page ? styles.active : ''}`}
					onClick={() => onGotoPage(p)}
					aria-current={p === page ? 'page' : undefined}
				>
					{p}
				</button>
			))}
			<button className={styles.navBtn} onClick={onNext} disabled={page >= totalPages} aria-label='Next'>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
		</div>
	);
}

export default PaginateBar;
