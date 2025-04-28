'use server';

import { FAQ } from '@/interfaces/faqs';

export async function fetchFAQData(): Promise<FAQ[]> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/faqs.json`);
	if (!res.ok) {
		throw new Error('Failed to fetch FAQ data');
	}
	const data = await res.json();
	return data as FAQ[];
}
