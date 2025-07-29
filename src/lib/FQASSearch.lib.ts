'use server';

import { IFAQ } from '@/interfaces/faqs';

export async function fetchFAQData(): Promise<IFAQ[]> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/faqs.json`);
	if (!res.ok) {
		throw new Error('Failed to fetch IFAQ data');
	}
	const data = await res.json();
	return data as IFAQ[];
}
