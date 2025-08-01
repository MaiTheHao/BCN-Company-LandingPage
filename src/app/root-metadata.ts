import COMPANY_INFO from '@/data/company-info';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: COMPANY_INFO.name,
	description: COMPANY_INFO.description,
	keywords: [
		'cơ khí',
		'chế tạo máy',
		'tiện',
		'hàn',
		'phay',
		'CNC',
		'thiết kế 3D',
		'Bình Dương',
		'gia công cơ khí',
		'Tân Uyên',
		'Uyên Hưng',
		'cơ khí chính xác',
		'dịch vụ gia công',
		'tiện chính xác',
		'hàn chuyên nghiệp',
		'phay đa trục',
		'cắt dây CNC',
	],
	authors: [{ name: COMPANY_INFO.name }],
	creator: COMPANY_INFO.name,
	publisher: COMPANY_INFO.name,
	formatDetection: {
		telephone: true,
		email: true,
		address: true,
	},
	openGraph: {
		title: COMPANY_INFO.name,
		description: COMPANY_INFO.slogan,
		url: 'https://vannang.io.vn',
		siteName: COMPANY_INFO.name,
		locale: 'vi_VN',
		type: 'website',
	},
	category: 'Cơ khí, Chế tạo máy',
	applicationName: COMPANY_INFO.name,
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: 'https://vannang.io.vn',
	},
	metadataBase: new URL('https://vannang.io.vn'),
	other: {
		'geo.region': 'VN-57', // Bình Dương province code
		'geo.placename': `${COMPANY_INFO.location.address.city}, ${COMPANY_INFO.location.address.province}`,
		'og:site_name': COMPANY_INFO.name,
		'og:image:alt': COMPANY_INFO.slogan,
		'business:contact_data:street_address': `${COMPANY_INFO.location.address.street}, ${COMPANY_INFO.location.address.area}`,
		'business:contact_data:locality': COMPANY_INFO.location.address.ward,
		'business:contact_data:region': COMPANY_INFO.location.address.city,
		'business:contact_data:postal_code': '',
		'business:contact_data:country_name': COMPANY_INFO.location.address.country,
	},
};
