import './globals.scss';
import './reset.scss';

import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import React from 'react';
import Banner from '@/components/banner/Banner';

interface RootLayoutProps {
	children: React.ReactNode;
	introduce: React.ReactNode;
	welcome: React.ReactNode;
	services: React.ReactNode;
	whyus: React.ReactNode;
	contact: React.ReactNode;
	faqs: React.ReactNode;
}

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
