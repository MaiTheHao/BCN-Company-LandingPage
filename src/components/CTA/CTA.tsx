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
	textTransform?: 'uppercase' | 'capitalize' | 'none';
	color?: 'orange' | 'blue' | string;
};

/**
 * Thành phần CTA (Call-to-Action) hiển thị một liên kết có thể tùy chỉnh với tiêu đề và biểu tượng.
 *
 * @param {string} href - URL đích cho liên kết.
 * @param {string} title - Văn bản hiển thị trên nút CTA.
 * @param {string} [iconSrc] - Đường dẫn đến biểu tượng hiển thị bên cạnh tiêu đề.
 * @param {boolean} [openInNewTab=true] - Xác định liệu liên kết có mở trong tab mới hay không.
 * @param {boolean} [fullWidth=false] - Xác định liệu nút CTA có chiếm toàn bộ chiều rộng của container hay không.
 * @param {string} [textTransform='uppercase'] - Kiểu chuyển đổi chữ: 'uppercase', 'capitalize' hoặc 'none'.
 * @param {string} [color='orange'] - Màu nút: 'orange', 'blue', hoặc mã màu tùy chỉnh (ví dụ: '#FF5733').
 *
 * @returns {JSX.Element} Thành phần CTA.
 */
function CTA({
	href,
	title,
	iconSrc,
	openInNewTab = true,
	fullWidth = false,
	textTransform = 'uppercase',
	color = 'orange',
}: Props) {
	const isPresetColor = color === 'orange' || color === 'blue';
	const customStyle = !isPresetColor ? { backgroundColor: color } : {};

	return (
		<Link
			href={href}
			className={`${styles.button} ${isPresetColor ? styles[`button--${color}`] : ''} ${
				open_sans.className
			} font-semibold font-white ${textTransform !== 'none' ? textTransform : ''} ${
				fullWidth ? styles.fullWidth : ''
			}`}
			style={{
				...(fullWidth ? { width: '100%' } : {}),
				...customStyle,
			}}
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
