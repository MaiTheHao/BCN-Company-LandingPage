import './globals.scss';
import './reset.scss';

import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import React from 'react';
import { COMPANY_INFO } from '../../company_data';
import { Metadata } from 'next';

interface RootLayoutProps {
	children: React.ReactNode;
	introduce: React.ReactNode;
	welcome: React.ReactNode;
	services: React.ReactNode;
	whyus: React.ReactNode;
	contact: React.ReactNode;
	faqs: React.ReactNode;
}

export const metadata: Metadata = {
	title: COMPANY_INFO.name,
	description: COMPANY_INFO.description,
	keywords: ['cơ khí', 'chế tạo máy', 'tiện', 'hàn', 'phay', 'CNC', 'thiết kế 3D', 'Bình Dương', 'gia công cơ khí'],
	authors: [{ name: 'Công Ty TNHH Cơ Khí Vạn Năng' }],
	creator: 'Công Ty TNHH Cơ Khí Vạn Năng',
	publisher: 'Công Ty TNHH Cơ Khí Vạn Năng',
	formatDetection: {
		telephone: true,
		email: true,
		address: true,
	},
	openGraph: {
		title: COMPANY_INFO.name,
		description: COMPANY_INFO.slogan,
		url: 'https://cokhivannang.com',
		siteName: COMPANY_INFO.name,
		locale: 'vi_VN',
		type: 'website',
	},
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-icon.png',
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
	category: 'Cơ khí, Chế tạo máy',
};

function RootLayout({ children, introduce, welcome, services, whyus, contact, faqs }: RootLayoutProps) {
	return (
		<html lang='vi'>
			<body>
				<Header />
				{introduce}
				{welcome}
				{services}
				{whyus}
				{contact}
				{faqs}
				{children}
				<Footer />
			</body>
		</html>
	);
}

export default RootLayout;
