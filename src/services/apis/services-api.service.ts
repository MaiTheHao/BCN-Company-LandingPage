import { IErrorFirst } from '@/interfaces/error-first.interface';
import { paginateService } from '@/services/paginate.service';
import { IService } from '@/interfaces/services';
import { IPaginatedResult } from '@/interfaces/paginate.interface';

class ServicesApiService {
	private baseUrl: string = '/data/services.json';
	private static instance: ServicesApiService;

	private constructor() {}
	public static getInstance(): ServicesApiService {
		if (!ServicesApiService.instance) {
			ServicesApiService.instance = new ServicesApiService();
		}
		return ServicesApiService.instance;
	}

	async getList(page: number = 1, limit: number = 10): Promise<IErrorFirst<IPaginatedResult<IService>>> {
		try {
			const res = await fetch(`${this.baseUrl}`);
			if (!res.ok) return { error: 'Không thể lấy danh sách dịch vụ.' };
			const data: IService[] = await res.json();
			const paginated = paginateService.paginate<IService>(data, page, limit);
			return { data: paginated };
		} catch (error) {
			return { error: 'Đã xảy ra lỗi khi lấy danh sách dịch vụ.' };
		}
	}

	async getById(id: string): Promise<IErrorFirst<IService>> {
		try {
			const res = await fetch(`${this.baseUrl}`);
			if (!res.ok) return { error: 'Không thể lấy thông tin dịch vụ.' };
			const data: IService[] = await res.json();
			const service = data.find((item) => item.id === id);
			if (!service) return { error: 'Dịch vụ không tồn tại.' };
			return { data: service };
		} catch (error) {
			return { error: 'Đã xảy ra lỗi khi lấy thông tin dịch vụ.' };
		}
	}
}

const servicesApiService = ServicesApiService.getInstance();
export default servicesApiService;
