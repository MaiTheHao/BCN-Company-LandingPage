import React from 'react';
import styles from './FooterDetailNav.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_CONTACT } from '../../../../company_data';
import { SocialMedia, NavSubItem, NavItem, FooterDetailNavProps } from '@/interfaces/footer';
import { montserrat, open_sans } from '@/app/fonts';

const NAV_ITEMS: NavItem[] = [
	{
		title: 'Điều hướng',
		items: [
			{ title: 'Giới thiệu', href: '#introduce' },
			{ title: 'Chào mừng', href: '#welcome' },
			{ title: 'Dịch vụ', href: '#services' },
			{ title: 'Lý do', href: '#whyus' },
			{ title: 'Liên hệ', href: '#contact' },
			{ title: 'FAQS', href: '#faqs' },
		],
	},
	{
		title: 'Chính sách',
		items: [
			{ title: 'Điều khoản sử dụng', href: '#' },
			{ title: 'Bảo mật', href: '#' },
			{ title: 'Bảo hành', href: '#' },
			{ title: 'Thanh toán', href: '#' },
		],
	},
	{
		title: 'Theo dõi',
		socialMedia: [
			{ icon: 'svgs/icons/zalo-default.svg', href: COMPANY_CONTACT.zalo },
			{ icon: 'svgs/icons/facebook-default.svg', href: COMPANY_CONTACT.facebook },
		],
	},
];

const SocialMediaList: React.FC<{ socialMedia: SocialMedia[] }> = ({ socialMedia }) => (
	<ul className={`${styles.sublist} ${styles.socialList}`}>
		{socialMedia.map((social, index) => (
			<li key={index} className={`${styles.subitem} ${styles.social}`}>
				<Link
					href={social.href}
					target='_blank'
					rel='noopener noreferrer'
					className={`${styles.link} ${styles.socialLink}`}
				>
					<Image
						className={`${styles.icon} ${styles.socialIcon}`}
						alt={social.href}
						src={social.icon}
						width={24}
						height={24}
						priority
					/>
				</Link>
			</li>
		))}
	</ul>
);

const ItemsList: React.FC<{ items: NavSubItem[] }> = ({ items }) => (
	<ul className={`${styles.sublist} ${styles.linkList}`}>
		{items.map((subItem, index) => (
			<li key={index} className={`${styles.subitem} ${styles.linkItem}`}>
				<Link href={subItem.href} className={`${styles.link} ${styles.linkText}`}>
					<span className={`${open_sans.className}`}>{subItem.title}</span>
				</Link>
			</li>
		))}
	</ul>
);

/**
 * Thành phần FooterDetailNav hiển thị danh sách điều hướng chi tiết trong footer.
 *
 * @param {Array} [navItems=NAV_ITEMS] - Danh sách các mục điều hướng để hiển thị.
 *
 * @returns {JSX.Element} Thành phần FooterDetailNav.
 */
export default function FooterDetailNav({ navItems = NAV_ITEMS }: FooterDetailNavProps) {
	return (
		<ul className={styles.nav}>
			{navItems.map((item, index) => (
				<li key={index} className={styles.item}>
					<span className={`${styles.title} ${montserrat.className} font-white font-semibold capitalize`}>
						{item.title}
					</span>
					{item.socialMedia ? (
						<SocialMediaList socialMedia={item.socialMedia} />
					) : (
						item.items && <ItemsList items={item.items} />
					)}
				</li>
			))}
		</ul>
	);
}
