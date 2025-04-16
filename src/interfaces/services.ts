export interface ServiceItem {
	image: string;
	title: string;
	description: string;
	alt: string;
}

export interface ListServicesProps {
	services: ServiceItem[];
	styles: Record<string, string>;
}
