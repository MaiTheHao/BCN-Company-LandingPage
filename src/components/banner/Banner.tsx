import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.scss';
import { open_sans } from '@/app/fonts';

type BannerProps = {
	src?: string;
	alt?: string;
	title?: string;
	description?: string;
	customSubClassName?: string;
	customContainerClassName?: string; // New prop
};

/**
 * Thành phần Banner hiển thị một hình ảnh nền với tiêu đề và mô tả.
 *
 * @param {string} [src='/images/introduce-2.webp'] - Đường dẫn đến hình ảnh hiển thị trong banner.
 * @param {string} [alt='Banner image'] - Văn bản thay thế cho hình ảnh (alt text).
 * @param {string} [title='Banner Title'] - Tiêu đề hiển thị trên banner.
 * @param {string} [description='Banner description'] - Mô tả hiển thị trên banner.
 * @param {string} [customSubClassName=''] - Tên lớp CSS tùy chỉnh cho phần tử nền phụ.
 * @param {string} [customContainerClassName=''] - Tên lớp CSS tùy chỉnh cho phần tử container.
 *
 * @returns {JSX.Element} Thành phần Banner.
 */
function Banner({
	src = '/images/introduce-2.webp',
	alt = 'Banner image',
	title = 'Banner Title',
	description = 'Banner description',
	customSubClassName = '',
	customContainerClassName = '', // New prop
}: BannerProps) {
	return (
		<div className={`${styles.container} ${customContainerClassName}`}>
			<div className={styles.block}>
				{/* Nền phụ */}
				<div className={`${styles.sub} ${customSubClassName}`}></div>

				{/* Nền chính */}
				<div className={styles.main}>
					<Image src={src} fill style={{ objectFit: 'cover' }} alt={alt} priority />
				</div>

				{/* Khung chữ */}
				<div className={`${styles.info} ${open_sans.className} font-white uppercase`}>
					<h1 className={`${styles.info_title} font-bold`}>{title}</h1>
					<span className={`${styles.info_description} font-semibold`}>{description}</span>
				</div>
			</div>
		</div>
	);
}

export default Banner;
