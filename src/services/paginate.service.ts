import { IPaginatedResult } from '@/interfaces/paginate.interface';

class PaginateService {
	private static instance: PaginateService;

	private constructor() {}
	public static getInstance(): PaginateService {
		if (!PaginateService.instance) {
			PaginateService.instance = new PaginateService();
		}
		return PaginateService.instance;
	}

	public paginate<T>(items: T[], page: number, limit: number): IPaginatedResult<T> {
		const total = items.length;
		const start = (page - 1) * limit;
		const end = start + limit;
		const paginatedItems = items.slice(start, end);

		return {
			data: paginatedItems,
			total,
			page,
			limit,
			hasNext: end < total,
			hasPrevious: start > 0,
		};
	}

	public getPaginatedResult<T>(items: T[], page: number, limit: number, total: number): IPaginatedResult<T> {
		return {
			data: items,
			total,
			page,
			limit,
			hasNext: page * limit < total,
			hasPrevious: page > 1,
		};
	}
}

const paginateService = PaginateService.getInstance();
export { PaginateService, paginateService };
