import React from 'react';
import styles from './HeaderNavItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { montserrat, open_sans } from '@/app/fonts';
import { IHeaderNavItemProps } from '@/interfaces/header';

/**
 * Thành phần HeaderNavItem hiển thị một mục điều hướng trong thanh điều hướng,
 * thường được sử dụng để liên kết đến các mạng xã hội của công ty.
 *
 * @param {string} icon - Đường dẫn đến biểu tượng hiển thị trong mục điều hướng.
 * @param {string} title - Tiêu đề chính của mục điều hướng.
 * @param {string} subtitle - Phụ đề mô tả thêm cho mục điều hướng.
 * @param {string} href - Đường dẫn liên kết đến mạng xã hội hoặc trang đích.
 *
 * @returns {JSX.Element} Thành phần HeaderNavItem.
 */
const HeaderNavItem: React.FC<IHeaderNavItemProps> = ({ icon, title, subtitle, href }) => {
	return (
		<Link href={href} className={styles.nav_item} target='_blank' rel='noopener noreferrer'>
			<div className={styles.nav_item_icon}>
				<Image alt={`${title} - ${subtitle}`} src={icon} height={24} width={24} priority quality={100} />
			</div>
			<div className={styles.nav_item_detail}>
				<span
					className={`${styles.nav_item_detail_title} capitalize font-regular font-white ${montserrat.className}`}
				>
					{title}
				</span>
				<span
					className={`${styles.nav_item_detail_subtitle} font-thin font-gray-light  ${open_sans.className}`}
				>
					{subtitle}
				</span>
			</div>
		</Link>
	);
};

export default HeaderNavItem;
