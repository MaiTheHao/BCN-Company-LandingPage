import PageSection from '@/components/shared/PageSection/PageSection';
import React from 'react';
import { LANDING_PAGE_SECTIONS } from '@/consts/landing-page';
import Link from 'next/link';
import styles from './Services.module.scss';
import { Cog, Zap, Settings, Cpu, Wrench, Package, ArrowRight } from 'lucide-react';
import COMPANY_INFO from '@/data/company-info';

const services = [
	{
		icon: Cog,
		title: 'Tiện Chính Xác',
		description: 'Gia công tiện với độ chính xác cao, đảm bảo dung sai chuẩn cho các chi tiết máy móc quan trọng.',
		features: ['Tiện CNC', 'Tiện thường', 'Gia công phức tạp'],
	},
	{
		icon: Zap,
		title: 'Hàn Chuyên Nghiệp',
		description: 'Dịch vụ hàn đa dạng với công nghệ hiện đại, đảm bảo độ bền và thẩm mỹ cao cho sản phẩm.',
		features: ['Hàn TIG', 'Hàn MIG', 'Hàn điện tử'],
	},
	{
		icon: Settings,
		title: 'Phay Đa Trục',
		description: 'Gia công phay với máy CNC đa trục, tạo ra các chi tiết phức tạp với độ chính xác tuyệt đối.',
		features: ['Phay CNC 3-5 trục', 'Phay thường', 'Gia công khuôn mẫu'],
	},
	{
		icon: Cpu,
		title: 'CNC & Thiết Kế 3D',
		description: 'Gia công CNC hiện đại kết hợp thiết kế 3D, từ ý tưởng đến sản phẩm hoàn thiện.',
		features: ['Thiết kế CAD/CAM', 'Gia công CNC', 'Tối ưu quy trình'],
	},
	{
		icon: Wrench,
		title: 'Thiết Bị Công Nghiệp',
		description: 'Cung cấp sỉ các thiết bị công nghiệp chất lượng cao: motor, bơm, biến tần và phụ kiện.',
		features: ['Motor công nghiệp', 'Bơm các loại', 'Biến tần điều khiển'],
	},
	{
		icon: Package,
		title: 'Tủ Điện & Phụ Kiện',
		description: 'Phân phối tủ điện và phụ kiện điều khiển chính hãng, đảm bảo chất lượng và độ tin cậy.',
		features: ['Tủ điện công nghiệp', 'Phụ kiện điều khiển', 'Hệ thống tự động'],
	},
];

const Services = () => (
	<PageSection
		id={LANDING_PAGE_SECTIONS.services.id}
		subtitle='Dịch Vụ Của Chúng Tôi'
		title='Giải Pháp Cơ Khí Toàn Diện'
		description='Từ gia công chính xác đến cung cấp thiết bị công nghiệp, chúng tôi mang đến dịch vụ uy tín và giá trị cho khách hàng.'
	>
		<div className={styles.servicesGrid}>
			{services.map((service, index) => (
				<div key={index} className={`cyber-card ${styles.serviceCard}`}>
					<div className='cyber-grid' />
					<div className={styles.cardContent}>
						<div className={styles.iconWrap}>
							<div className='cyber-icon'>
								<service.icon />
							</div>
						</div>
						<h3 className={`${styles.cardTitle} cyber-title`}>{service.title}</h3>
						<p className={styles.cardDescription}>{service.description}</p>
						<div className={styles.features}>
							{service.features.map((feature, idx) => (
								<div key={idx} className='cyber-feature'>
									{feature}
								</div>
							))}
						</div>
						<Link
							href={COMPANY_INFO.contact.zalo}
							target='_blank'
							className='cta cyber'
							style={{ width: '100%' }}
						>
							Tìm hiểu thêm
							<ArrowRight />
						</Link>
					</div>
				</div>
			))}
		</div>
		<div className={styles.ctaWrap}>
			<Link href={COMPANY_INFO.contact.zalo} target='_blank' className='cta primary'>
				Nhận Tư Vấn Miễn Phí
				<ArrowRight />
			</Link>
		</div>
	</PageSection>
);

export default Services;
