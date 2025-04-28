import React from 'react';
import Link from 'next/link';
import '@/app/globals.scss';
import styles from '@/app/not-found.module.scss';
import { montserrat, open_sans } from '../fonts';

export const metadata = {
	title: '404 - Không tìm thấy trang | Cơ Khí Vạn Năng',
	description: 'Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.',
};

const NotFoundPage = () => {
	return (
		<div className='root-container'>
			<div className='root-block'>
				<div className={styles.notFoundContainer}>
					<h1 className={`${styles.errorCode} ${montserrat.className}`}>404</h1>
					<h2 className={`${styles.title} root-block-title root-block-title--blue ${montserrat.className}`}>
						Không tìm thấy trang
					</h2>
					<p className={`${styles.description} font-gray-medium ${open_sans.className}`}>
						Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển đến một địa chỉ khác.
					</p>
					<Link href='/' className={`${styles.homeButton} ${montserrat.className}`}>
						Quay lại trang chủ
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
