export interface IService {
	id: string;
	image: string;
	title: string;
	description: string;
	alt: string;
}

export interface ListServicesProps {
	services: IService[];
	styles: Record<string, string>;
}
