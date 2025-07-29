import BodyPageTemplate from '@/components/body_page_template/BodyPageTemplate';
import React from 'react';
import styles from './Introduce.module.scss';
import Banner from '@/components/banner/Banner';
import { montserrat, open_sans } from '../fonts';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_CONTACT, COMPANY_INFO } from '@data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: `Giới thiệu | ${COMPANY_INFO.name}`,
	description: COMPANY_INFO.description,
	keywords: [
		'cơ khí vạn năng',
		'dịch vụ cơ khí',
		'gia công cơ khí',
		'tiện',
		'hàn',
		'phay',
		'bào',
		'CNC',
		'Bình Dương',
		'chế tạo máy',
	],
	openGraph: {
		title: `Giới thiệu | ${COMPANY_INFO.name}`,
		description: COMPANY_INFO.description,
		siteName: COMPANY_INFO.name,
		locale: 'vi_VN',
		type: 'website',
	},
};

type Props = {};

const INTRODUCE_PAGE_CONFIG = {
	customID: 'introduce',
	classes: {
		container: styles.container,
		additional: styles.additional,
		block: styles.block,
	},
};

const TITLE_CONTENT = {
	slogan: COMPANY_INFO.slogan,
	mainTitle: {
		prefix: 'Gia công',
		highlight: 'tiện - hàn - phay - bào - CNC',
		suffix: 'Chuẩn xác & bền bỉ theo thời gian!',
	},
};

const SOCIAL_MEDIA_LINKS = [
	{
		url: COMPANY_CONTACT.facebook,
		icon: '/svgs/icons/facebook-default.svg',
		qr: '/images/qr-facebook.webp',
		alt: 'Facebook của chúng tôi',
		qrAlt: 'QR Facebook của chúng tôi',
	},
	{
		url: COMPANY_CONTACT.zalo,
		icon: '/svgs/icons/zalo-default.svg',
		qr: '/images/qr-zalo.webp',
		alt: 'Zalo OA của chúng tôi',
		qrAlt: 'QR Zalo OA của chúng tôi',
	},
];

const BANNER_CONFIG = {
	src: '/pages/introduce/introduce-2.svg',
	alt: 'Introduce banner card',
	title: '100%',
	description: 'Chất lượng & uy tín',
	classes: {
		sub: styles.banner_sub,
		container: styles.banner_container,
	},
};

async function Introduce({}: Props) {
	return (
		<BodyPageTemplate
			customID={INTRODUCE_PAGE_CONFIG.customID}
			customContainerClassName={INTRODUCE_PAGE_CONFIG.classes.container}
			customAdditionalClassName={INTRODUCE_PAGE_CONFIG.classes.additional}
			customBlockClassName={INTRODUCE_PAGE_CONFIG.classes.block}
		>
			<div className={styles.detail}>
				<div className={`${styles.detail_title} ${montserrat.className} font-white`}>
					<h3 className={`uppercase`}>{TITLE_CONTENT.slogan}</h3>
					<h1 className={`capitalize font-semibold`}>
						{TITLE_CONTENT.mainTitle.prefix} <br />
						<strong className={`font-orange font-semibold`}>{TITLE_CONTENT.mainTitle.highlight}</strong>
						<br /> {TITLE_CONTENT.mainTitle.suffix}
					</h1>
				</div>
				<p className={`${styles.detail_description} ${open_sans.className} font-white font-thin`}>
					{COMPANY_INFO.description}
				</p>
				<div className={styles.detail_socialMedias}>
					{SOCIAL_MEDIA_LINKS.map((social, index) => (
						<Link
							key={index}
							href={social.url}
							target='_blank'
							rel='noopener noreferrer'
							className={styles.detail_socialMedias_item}
						>
							<div className={styles.detail_socialMedias_item_icon}>
								<Image src={social.icon} alt={social.alt} fill />
							</div>
							<div className={styles.detail_socialMedias_item_qr}>
								<Image src={social.qr} alt={social.qrAlt} fill />
							</div>
						</Link>
					))}
				</div>
			</div>
			<Banner
				src={BANNER_CONFIG.src}
				alt={BANNER_CONFIG.alt}
				title={BANNER_CONFIG.title}
				description={BANNER_CONFIG.description}
				customSubClassName={BANNER_CONFIG.classes.sub}
				customContainerClassName={BANNER_CONFIG.classes.container}
			/>
		</BodyPageTemplate>
	);
}

export default Introduce;
