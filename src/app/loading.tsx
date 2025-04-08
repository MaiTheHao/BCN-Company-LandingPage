import React from 'react';
import './globals.scss';
import styles from './loading.module.scss';
import { montserrat, open_sans } from './fonts';

export const metadata = {
	title: 'Đang Tải | Cơ Khí Vạn Năng',
	description: 'Đang tải nội dung, vui lòng đợi trong giây lát.',
};

interface LoadingProps {
	title?: string;
}

const Loading: React.FC<LoadingProps> = ({ title = 'Đang tải' }) => {
	return (
		<div className='root-container'>
			<div className='root-block'>
				<div className={styles.loadingContainer}>
					<div className={styles.spinner}></div>
					<h2 className={`${styles.title} root-block-title root-block-title--blue ${montserrat.className}`}>
						{title}
					</h2>
					<p className={`${styles.description} font-gray-medium ${open_sans.className}`}>
						Vui lòng đợi trong giây lát...
					</p>
				</div>
			</div>
		</div>
	);
};

export default Loading;
