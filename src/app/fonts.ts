import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['300', '400', '600', '700'],
	style: ['normal', 'italic'],
});

const open_sans = Open_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '600', '700'],
	style: ['normal', 'italic'],
});

export { montserrat, open_sans };
