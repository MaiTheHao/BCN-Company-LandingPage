import React from 'react';
import Link from 'next/link';
import styles from './CTA.module.scss';
import { open_sans } from '@/app/fonts';
import Image from 'next/image';

type Props = {
	href: string;
	title: string;
	iconSrc: string;
	openInNewTab?: boolean;
	fullWidth?: boolean;
};

/**
 * Thành phần CTA (Call-to-Action) hiển thị một liên kết có thể tùy chỉnh với tiêu đề và biểu tượng.
 *
 * @param {string} href - URL đích cho liên kết.
 * @param {string} title - Văn bản hiển thị trên nút CTA.
 * @param {string} [iconSrc] - Đường dẫn đến biểu tượng hiển thị bên cạnh tiêu đề.
 * @param {boolean} [openInNewTab=true] - Xác định liệu liên kết có mở trong tab mới hay không.
 * @param {boolean} [fullWidth=false] - Xác định liệu nút CTA có chiếm toàn bộ chiều rộng của container hay không.
 *
 * @returns {JSX.Element} Thành phần CTA.
 */
function CTA({ href, title, iconSrc, openInNewTab = true, fullWidth = false }: Props) {
	return (
		<Link
			href={href}
			className={`${styles.button} ${open_sans.className} font-semibold font-white uppercase ${
				fullWidth ? styles.fullWidth : ''
			}`}
			style={fullWidth ? { width: '100%' } : {}}
			{...(openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
		>
			<span className={styles.title}>{title}</span>
			{iconSrc && (
				<div className={styles.icon}>
					<Image src={iconSrc} alt={title} fill />
				</div>
			)}
		</Link>
	);
}

export default CTA;
