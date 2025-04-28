import React from 'react';
import styles from './FQASSearch.module.scss';
import { montserrat } from '@/app/fonts';

interface LoadMoreButtonProps {
	onClick: () => void;
	isLoading: boolean;
}

export default function LoadMoreButton({ onClick, isLoading }: LoadMoreButtonProps) {
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
