export interface FAQ {
	title: string;
	description: string;
	categories: string[];
}

export interface SearchResult {
	results: FAQ[];
	count: number;
	query: string;
}

export interface SearchOptions {
	caseSensitive?: boolean;
	fuzzy?: boolean;
	maxResults?: number;
	threshold?: number;
}
