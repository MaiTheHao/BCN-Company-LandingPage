'use server';

import { FAQ } from '@/interfaces/faqs';
import { readFile } from 'fs/promises';
import path from 'path';

export async function fetchFAQData(): Promise<FAQ[]> {
	const filePath = path.join(process.cwd(), 'public', 'data', 'faqs.json');
	const data = await readFile(filePath, 'utf-8');
	return JSON.parse(data) as FAQ[];
}
