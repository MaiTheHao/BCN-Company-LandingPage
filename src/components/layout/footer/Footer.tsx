import React from 'react';
import styles from './Footer.module.scss';
import { COMPANY_CONTACT, COMPANY_INFO } from '../../../../company_data';
import { montserrat, open_sans } from '@/app/fonts';
import Image from 'next/image';
import FooterDetailSumary from '../footer_detail_sumary/FooterDetailSumary';
import FooterDetailNav from '../footer_detail_nav/FooterDetailNav';
import { SumaryItem } from '@/interfaces/footer';

const COPYRIGHT = `© ${new Date().getFullYear()} ${COMPANY_INFO.name}. MST: ${COMPANY_INFO.taxId}`;
const COMPANY_LOCATION = COMPANY_INFO.location;
const SUMARY_ITEMS: SumaryItem[] = [
	{
		icon: 'svgs/icons/location-transparent-white.svg',
		title: `${COMPANY_LOCATION.address.street}, ${COMPANY_LOCATION.address.area}, ${COMPANY_LOCATION.address.ward}, ${COMPANY_LOCATION.address.city}, ${COMPANY_LOCATION.address.province}`,
		href: COMPANY_CONTACT.googleMap,
	},
	{
		icon: 'svgs/icons/phone.svg',
		title: COMPANY_CONTACT.phone,
		href: `tel:${COMPANY_CONTACT.phone}`,
	},
	{
		icon: 'svgs/icons/calender.svg',
		title: '7:30 AM – 4:30 PM (Thứ 2 – Thứ 7)',
		href: '#',
	},
];

/**
 * Thành phần Footer hiển thị phần chân trang của trang web, bao gồm thông tin tổng quát,
 * điều hướng chi tiết và bản đồ vị trí công ty.
 *
 * @returns {JSX.Element} Thành phần Footer.
 */
export default function Footer() {
	return (
		<div className={`root-container ${styles.container}`}>
			<div className={`root-block ${styles.box}`}>
				{/* Phần thông tin tổng quát */}
				<div className={`${styles.details}`}>
					<FooterDetailSumary
						logoSrc='/svgs/logo-texticon.svg'
						logoAlt='Cty TNHH Cơ Khí Vạn Năng'
						sumaryItems={SUMARY_ITEMS}
					/>
					<FooterDetailNav />
				</div>

				{/* Phần bản đồ */}
				<div className={`${styles.map}`}>
					<Image
						src={'/svgs/map.svg'}
						alt='Map'
						width={1200}
						height={308}
						className={`${styles.map_icon} ${open_sans.className}`}
					/>
				</div>

				{/* Phần bản quyền */}
				<div className={`${styles.copyright}`}>
					<span className={`${montserrat.className} font-regular font-gray-light capitalize`}>
						{COPYRIGHT}
					</span>
				</div>
			</div>
		</div>
	);
}
