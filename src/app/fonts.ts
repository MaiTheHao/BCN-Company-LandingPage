import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['300', '400', '600', '700'],
	style: ['normal', 'italic'],
	variable: '--font-montserrat',
});

const open_sans = Open_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '600', '700'],
	style: ['normal', 'italic'],
	variable: '--font-open-sans',
});

export { montserrat, open_sans };
