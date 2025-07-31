import type React from 'react';
import './globals.css';
import { metadata } from './root-metadata';
import { open_sans } from './fonts';

export const viewport = {
	width: 'device-width',
	initialScale: 1,
};

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='vi'>
			<body className={open_sans.className}>{children}</body>
		</html>
	);
}
