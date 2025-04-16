import React from 'react';
import Image from 'next/image';
import { montserrat, open_sans } from '@/app/fonts';
import { ServiceItem } from '@/interfaces/services';

interface ListServicesProps {
	services: ServiceItem[];
	styles: {
		list: string;
		list_item: string;
		list_item_detail: string;
		list_item_detail_overlay: string;
		list_item_detail_description: string;
	};
}

const ListServices: React.FC<ListServicesProps> = ({ services, styles }) => {
	return (
		<ul className={styles.list}>
			{services.map((service, index) => (
				<li key={index} className={styles.list_item}>
					<div className={styles.list_item_detail}>
						<Image src={service.image} alt={service.alt} fill />
						<div className={styles.list_item_detail_overlay} />
						<div className={`${styles.list_item_detail_description} font-white`}>
							<h3 className={`${montserrat.className} font-semibold capitalize`}>{service.title}</h3>
							<p className={`${open_sans.className} font-regular`}>{service.description}</p>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default ListServices;
