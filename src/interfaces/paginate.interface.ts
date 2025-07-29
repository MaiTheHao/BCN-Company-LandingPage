export interface IPaginatedResult<T> {
	data: T[];
	total: number;
	page: number;
	limit: number;
	hasNext: boolean;
	hasPrevious: boolean;
}
