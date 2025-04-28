import React from 'react';
import styles from './FQASSearch.module.scss';

export default function ResultsLoading() {
	return (
		<li className={styles.loading}>
			<div className={styles.loading_pulse}></div>
		</li>
	);
}
