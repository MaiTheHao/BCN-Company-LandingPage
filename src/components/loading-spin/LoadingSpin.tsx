'use client';

import { montserrat, open_sans } from '@/app/fonts';
import styles from './LoadingSpin.module.scss';

type LoadingSpinProps = {
	title?: string;
};

function LoadingSpin({ title = 'Đang tải...' }: LoadingSpinProps) {
	return (
		<div className={styles.loadingContainer}>
			<div className={styles.spinner}></div>
			<h2 className={`${styles.title} root-block-title root-block-title--blue ${montserrat.className}`}>
				{title}
			</h2>
			<p className={`${styles.description} font-gray-medium ${open_sans.className}`}>
				Vui lòng đợi trong giây lát...
			</p>
		</div>
	);
}

export default LoadingSpin;
