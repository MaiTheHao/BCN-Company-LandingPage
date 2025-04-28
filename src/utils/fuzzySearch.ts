/**
 * Fuzzy search implementation based on Levenshtein distance algorithm
 */

// Calculate Levenshtein distance between two strings
export function levenshteinDistance(str1: string, str2: string): number {
	const track = Array(str2.length + 1)
		.fill(null)
		.map(() => Array(str1.length + 1).fill(null));

	for (let i = 0; i <= str1.length; i++) {
		track[0][i] = i;
	}

	for (let j = 0; j <= str2.length; j++) {
		track[j][0] = j;
	}

	for (let j = 1; j <= str2.length; j++) {
		for (let i = 1; i <= str1.length; i++) {
			const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
			track[j][i] = Math.min(
				track[j][i - 1] + 1, // deletion
				track[j - 1][i] + 1, // insertion
				track[j - 1][i - 1] + indicator // substitution
			);
		}
	}

	return track[str2.length][str1.length];
}

// Calculate similarity score between two strings (0 to 1)
export function stringSimilarity(str1: string, str2: string): number {
	if (!str1.length && !str2.length) return 1; // Both empty strings
	if (!str1.length || !str2.length) return 0; // One empty string

	const maxLength = Math.max(str1.length, str2.length);
	const distance = levenshteinDistance(str1, str2);

	return (maxLength - distance) / maxLength;
}

// Tokenize text into words
export function tokenize(text: string): string[] {
	return text
		.toLowerCase()
		.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
		.split(/\s+/)
		.filter(Boolean);
}

export interface FuzzySearchOptions {
	caseSensitive?: boolean;
	tokenize?: boolean;
	threshold?: number; // Minimum similarity score (0 to 1)
	keys?: string[]; // Object properties to search within
	maxResults?: number;
}

export interface FuzzySearchResult<T> {
	item: T;
	score: number;
	matches: { key: string; score: number }[];
}

// Main fuzzy search function
export function fuzzySearch<T>(query: string, items: T[], options: FuzzySearchOptions = {}): FuzzySearchResult<T>[] {
	const {
		caseSensitive = false,
		tokenize: shouldTokenize = true,
		threshold = 0.4,
		keys = [],
		maxResults = Infinity,
	} = options;

	if (!query) return items.map((item) => ({ item, score: 1, matches: [] }));

	const normalizedQuery = caseSensitive ? query : query.toLowerCase();
	const queryTokens = shouldTokenize ? tokenize(normalizedQuery) : [normalizedQuery];

	const results: FuzzySearchResult<T>[] = [];

	for (const item of items) {
		// If no keys provided, assume items are strings
		const searchableFields = keys.length
			? keys.map((key) => ({ key, value: String((item as any)[key] || '') }))
			: [{ key: 'value', value: String(item) }];

		const matches: { key: string; score: number }[] = [];
		let itemScore = 0;

		for (const field of searchableFields) {
			const fieldValue = caseSensitive ? field.value : field.value.toLowerCase();

			if (shouldTokenize) {
				const fieldTokens = tokenize(fieldValue);
				let fieldScore = 0;

				// Match each query token against each field token
				for (const queryToken of queryTokens) {
					let bestTokenScore = 0;

					for (const fieldToken of fieldTokens) {
						const tokenScore = stringSimilarity(queryToken, fieldToken);
						bestTokenScore = Math.max(bestTokenScore, tokenScore);
					}

					fieldScore += bestTokenScore;
				}

				fieldScore /= queryTokens.length; // Normalize by number of query tokens
				matches.push({ key: field.key, score: fieldScore });
				itemScore = Math.max(itemScore, fieldScore);
			} else {
				// Direct match without tokenization
				const score = stringSimilarity(normalizedQuery, fieldValue);
				matches.push({ key: field.key, score });
				itemScore = Math.max(itemScore, score);
			}
		}

		// Only include results that meet the threshold
		if (itemScore >= threshold) {
			results.push({ item, score: itemScore, matches });
		}
	}

	// Sort by score (descending)
	results.sort((a, b) => b.score - a.score);

	// Return top results
	return results.slice(0, maxResults);
}
