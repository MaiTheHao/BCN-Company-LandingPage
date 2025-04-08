import React from 'react';
import styles from './FooterDetailSumary.module.scss';
import { open_sans } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { FooterDetailSumaryProps } from '@/interfaces/footer';

/**
 * Thành phần FooterDetailSumary hiển thị phần thông tin tổng quát ở chân trang,
 * bao gồm text logo và các thông tin quan trọng khác.
 *
 * @param {string} logoSrc - Đường dẫn đến hình ảnh text logo hiển thị trong phần chân trang.
 * @param {string} logoAlt - Văn bản thay thế cho hình ảnh logo (alt text).
 * @param {Array<{ href: string; icon: string; title: string }>} sumaryItems - Danh sách các mục thông tin quan trọng,
 * mỗi mục bao gồm đường dẫn, biểu tượng và tiêu đề.
 *
 * @returns {JSX.Element} Thành phần FooterDetailSumary.
 */
export default function FooterDetailSumary({ logoSrc, logoAlt, sumaryItems }: FooterDetailSumaryProps) {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Image src={logoSrc} alt={logoAlt} width={300} height={38} />
			</div>
			<ul className={styles.items}>
				{sumaryItems.map((item, index) => (
					<li key={`item-${index}`} className={`${styles.item} ${open_sans.className}`}>
						<Link href={item.href}>
							<Image src={item.icon} alt={item.title} width={16} height={16} />
							<span className='font-regular font-white'>{item.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
