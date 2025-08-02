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
		title: 'Hàn Chất Lượng',
		description: 'Dịch vụ hàn đa dạng với công nghệ tiêu chuẩn, đảm bảo độ bền và thẩm mỹ cao cho sản phẩm.',
		features: ['Hàn TIG', 'Hàn MAG', 'Hàn que'],
	},
	{
		icon: Settings,
		title: 'Tiện & Gia Công Cắt Dây',
		description:
			'Chúng tôi chuyên gia công tiện, bào và cắt dây, tạo ra các chi tiết với độ chính xác cao và khả năng đáp ứng đa dạng yêu cầu sản xuất.',
		features: ['Tiện', 'Gia công bào', 'Cắt dây EDM'],
	},
	{
		icon: Cpu,
		title: 'CNC & Thiết Kế 3D',
		description: 'Gia công CNC hiện đại kết hợp thiết kế 3D, từ ý tưởng đến sản phẩm hoàn thiện.',
		features: ['Thiết kế CAD/CAM', 'Gia công CNC', 'Tối ưu quy trình'],
	},
	{
		icon: Wrench,
		title: 'Bảo Trì Thiết Bị Công Nghiệp',
		description:
			'Chúng tôi chuyên sửa chữa và gia công máy móc, thiết bị công nghiệp tận nơi, đảm bảo khôi phục hoạt động nhanh chóng và hiệu quả.',
		features: ['Sửa chữa máy công nghiệp', 'Gia công chi tiết tại chỗ', 'Bảo trì & nâng cấp thiết bị'],
	},
	{
		icon: Package,
		title: 'Ốc Tán, Phụ Kiện & Vật Tư',
		description:
			'Cung cấp đa dạng ốc tán, phụ kiện và vật tư công nghiệp, đảm bảo chất lượng và tính ứng dụng cao.',
		features: ['Ốc tán các loại', 'Phụ kiện liên kết', 'Vật tư tổng hợp'],
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
