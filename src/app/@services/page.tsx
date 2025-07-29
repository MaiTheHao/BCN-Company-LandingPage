'use client';
import React, { useEffect, useRef, useState } from 'react';
import BodyPageTemplate from '@/components/body_page_template/BodyPageTemplate';
import styles from './Services.module.scss';
import { montserrat, open_sans } from '../fonts';
import CustomSubTitle from '@/components/custom_sub_title/CustomSubTitle';
import Link from 'next/link';
import servicesApiService from '@/services/apis/services-api.service';
import PaginateBar from '@/components/paginate-bar/PaginateBar';
import LoadingSpin from '@/components/loading-spin/LoadingSpin';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

type Props = {};

const SERVICES_PAGE_CONFIG = {
	customID: 'services',
	classes: {
		container: styles.container,
		additional: styles.additional,
		block: styles.block,
	},
};

const LIMIT = 100;

function Services({}: Props) {
	const listRef = useRef(null);
	const [services, setServices] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	const fetchServices = async (pageNum: number) => {
		setLoading(true);
		const res = await servicesApiService.getList(pageNum, LIMIT);
		setServices(res);
		setLoading(false);
	};

	const getScrollAmount = () => {
		const baseWidth = typeof window !== 'undefined' && window.innerWidth > 1200 ? 1200 : window.innerWidth;
		return baseWidth * 0.85;
	};

	const handleNext = () => {
		const scrollAmount = getScrollAmount();
		if (listRef.current) {
			const container = listRef.current as HTMLElement;
			container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	const handlePrev = () => {
		const scrollAmount = getScrollAmount();
		if (listRef.current) {
			const container = listRef.current as HTMLElement;
			container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
		}
	};

	useEffect(() => {
		fetchServices(1);
	}, []);

	return (
		<BodyPageTemplate
			customID={SERVICES_PAGE_CONFIG.customID}
			customContainerClassName={SERVICES_PAGE_CONFIG.classes.container}
			customAdditionalClassName={SERVICES_PAGE_CONFIG.classes.additional}
			customBlockClassName={SERVICES_PAGE_CONFIG.classes.block}
		>
			<div className={styles.top}>
				<div className={styles.title}>
					<CustomSubTitle title='Các dịch vụ chính' />
					<h1 className={`${montserrat.className} font-bold capitalize font-blue-dark`}>
						Chất lượng đảm bảo
						<br /> uy tín, chuyên nghiệp với đội ngũ giàu kinh nghiệm
					</h1>
				</div>
				<p className={`${styles.description} ${open_sans.className} font-thin font-white`}>
					Chúng tôi chuyên gia công cơ khí chính xác:
					<strong className='font-semibold'>Tiện, Hàn, Phay, Bào, CNC</strong> theo yêu cầu. Với máy móc hiện
					đại, kỹ sư hơn 25 năm kinh nghiệm, chúng tôi đảm bảo chất lượng, tối ưu chi phí và hỗ trợ thiết kế
					3D. Cam kết giao hàng đúng hẹn, bảo hành dài lâu. Liên hệ ngay để được tư vấn!
				</p>
			</div>

			<div className={styles.servicesContainer}>
				{loading ? (
					<LoadingSpin title='Đang tải dịch vụ...' />
				) : (
					<ul className={styles.servicesList} ref={listRef}>
						{services.data.data.map((service: any) => (
							<div key={service.id} className={styles.serviceCard}>
								<div className={styles.serviceImageContainer}>
									<Image
										src={service.image}
										alt={service.alt}
										className={styles.serviceImage}
										fill
										sizes='(max-width: 600px) 100vw, 400px'
									/>
								</div>
								<div className={styles.serviceContent}>
									<h3 className={`${montserrat.className} ${styles.serviceTitle}`}>
										{service.title}
									</h3>
									<p className={`${open_sans.className} ${styles.serviceDescription}`}>
										{service.description}
									</p>
									<Link
										href={`/services/${service.id}`}
										className={`${styles.serviceLink} ${montserrat.className}`}
									>
										Xem chi tiết &rarr;
									</Link>
								</div>
							</div>
						))}

						<button
							className={`${styles.navBtn} ${styles.prev}`}
							onClick={handlePrev}
							disabled={services.data.current_page <= 1}
						>
							<FontAwesomeIcon icon={faChevronLeft} />
						</button>
						<button
							className={`${styles.navBtn} ${styles.next}`}
							onClick={handleNext}
							disabled={services.data.current_page >= services.data.last_page}
						>
							<FontAwesomeIcon icon={faChevronRight} />
						</button>
					</ul>
				)}
			</div>
		</BodyPageTemplate>
	);
}

export default Services;
