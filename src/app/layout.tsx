import type React from 'react';
import './globals.scss';
import { metadata } from './root-metadata';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { montserrat, open_sans } from './fonts';

export const viewport = {
	width: 'device-width',
	initialScale: 1,
};

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='vi'>
			<body className={`${montserrat.variable} ${open_sans.variable}`}>
				<div id='root'>
					<Header />
					<main>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
