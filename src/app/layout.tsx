import './globals.scss';
import { montserrat, open_sans } from './fonts';
import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';

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
