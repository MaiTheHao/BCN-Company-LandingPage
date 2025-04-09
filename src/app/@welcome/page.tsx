import BodyPageTemplate from '@/components/body_page_template/BodyPageTemplate';
import React from 'react';
import styles from './Welcome.module.scss';
import Banner from '@/components/banner/Banner';
import { montserrat, open_sans } from '../fonts';
import Image from 'next/image';
import CustomSubTitle from '@/components/custom_sub_title/CustomSubTitle';
import CTA from '@/components/CTA/CTA';
import { COMPANY_CONTACT, COMPANY_DIRECTOR, COMPANY_INFO } from '@data';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `Trang chủ | ${COMPANY_INFO.name}`,
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
		'giải pháp cơ khí',
		'chi phí tối ưu',
	],
	openGraph: {
		title: `Trang chủ | ${COMPANY_INFO.name}`,
		description: COMPANY_INFO.description,
		siteName: COMPANY_INFO.name,
		locale: 'vi_VN',
		type: 'website',
	},
};

type Props = {};

const WELCOME_PAGE_CONFIG = {
	customID: 'welcome',
	classes: {
		container: styles.container,
		additional: styles.additional,
		block: styles.block,
	},
};

const CONTENT = {
	subtitle: 'Hân Hạnh Đón Chào',
	title: 'Chúng tôi cam kết mang đến dịch vụ gia công chất lượng cao với chi phí tối ưu nhất',
	description:
		'Với đội ngũ chuyên gia giàu kinh nghiệm và áp dụng công nghệ hiện đại, chúng tôi tự hào mang đến giải pháp gia công tối ưu cho mọi nhu cầu của doanh nghiệp. Từ việc đảm bảo chất lượng sản phẩm vượt trội đến việc tối ưu hóa chi phí, chúng tôi luôn đồng hành cùng sự thành công của bạn. Hãy đăng ký ngay để nhận tư vấn và báo giá chi tiết!',
};

const STANDARDS = [
	'đội ngũ nhân công năng động',
	'Quản lí hiệu quả và linh động',
	'Chuyên Môn Cao Và Đủ Tiêu Chuẩn',
	'Cam Kết 100% Hài Lòng',
	'Giải pháp cá nhân hóa',
	'Kinh ngiệm qua 1000+ công trình',
];

const CTA_CONFIG = {
	href: COMPANY_CONTACT.facebook,
	title: 'Khám phá ngay',
	icon: '/svgs/icons/facebook-transparent-white.svg',
};

const BANNER_CONFIG = {
	src: '/images/welcome-1.webp',
	alt: 'Welcome banner card',
	title: `${COMPANY_DIRECTOR.achievements[0].title.split(' ')[1]}+`,
	description: 'Năm Kinh Nghiệm',
	classes: {
		sub: styles.banner_sub,
		container: styles.banner_container,
	},
};

function Welcome({}: Props) {
	return (
		<BodyPageTemplate
			customID={WELCOME_PAGE_CONFIG.customID}
			customContainerClassName={WELCOME_PAGE_CONFIG.classes.container}
			customAdditionalClassName={WELCOME_PAGE_CONFIG.classes.additional}
			customBlockClassName={WELCOME_PAGE_CONFIG.classes.block}
		>
			<div className={styles.detail}>
				<CustomSubTitle title={CONTENT.subtitle} />
				<h1 className={`${styles.title} ${montserrat.className} font-bold capitalize font-blue-dark`}>
					{CONTENT.title}
				</h1>
				<p className={`${styles.description} ${open_sans.className} font-thin font-gray`}>
					{CONTENT.description}
				</p>
				<ul className={`${styles.standards} ${open_sans.className} font-thin font-gray capitalize`}>
					{STANDARDS.map((standard, index) => (
						<li key={index}>
							<strong>-</strong> {standard}
						</li>
					))}
				</ul>
				<div className={styles.actions}>
					<div className={styles.actions_cta}>
						<CTA
							href={CTA_CONFIG.href}
							title={CTA_CONFIG.title}
							fullWidth={false}
							iconSrc={CTA_CONFIG.icon}
						/>
					</div>
					<div className={styles.logo}>
						<Image
							src='/svgs/logo-6.svg'
							alt={`${COMPANY_INFO.name} Logo`}
							width={99}
							height={56}
							className={`${styles.logo_img} ${montserrat.className}`}
						/>
					</div>
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

export default Welcome;
