export interface IFAQ {
	title: string;
	description: string;
	categories: string[];
}

export interface SearchResult {
	results: IFAQ[];
	count: number;
	query: string;
}

export interface SearchOptions {
	caseSensitive?: boolean;
	fuzzy?: boolean;
	maxResults?: number;
	threshold?: number;
}
