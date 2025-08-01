import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import COMPANY_INFO from '@/data/company-info';

const projects = [
	{
		title: 'Gia Công Chi Tiết Máy Dệt',
		category: 'Tiện CNC',
		description:
			'Gia công chính xác các chi tiết máy dệt với độ phức tạp cao, đảm bảo dung sai nghiêm ngặt và độ bền vượt trội.',
		image: '',
		duration: '2 tuần',
		location: 'Bình Dương',
		highlights: ['Độ chính xác 0.005mm', 'Vật liệu inox 316L', 'Kiểm tra 100% sản phẩm'],
	},
	{
		title: 'Chế Tạo Khuôn Ép Nhựa',
		category: 'Phay & Thiết Kế 3D',
		description:
			'Thiết kế và chế tạo khuôn ép nhựa phức tạp với công nghệ CAD/CAM tiên tiến, tối ưu hóa quy trình sản xuất.',
		image: '',
		duration: '3 tuần',
		location: 'TP.HCM',
		highlights: ['Thiết kế 3D tối ưu', 'Phay CNC 5 trục', 'Thử nghiệm đạt chuẩn'],
	},
	{
		title: 'Hệ Thống Tự Động Hóa',
		category: 'Tủ Điện & Điều Khiển',
		description:
			'Lắp đặt hệ thống tự động hóa hoàn chỉnh bao gồm tủ điện, PLC và các thiết bị điều khiển cho dây chuyền sản xuất.',
		image: '',
		duration: '4 tuần',
		location: 'Đồng Nai',
		highlights: ['PLC Siemens S7-1500', 'HMI cảm ứng 15"', 'Giám sát từ xa'],
	},
];

import PageSection from '@/components/shared/PageSection/PageSection';
import styles from './Projects.module.scss';
import PLACEHOLDER_IMAGES from '@/consts/placeholder-images';

export default function Projects() {
	return (
		<PageSection
			id='projects'
			subtitle='Dự Án Tiêu Biểu'
			title='Những Thành Công Đã Đạt Được'
			description='Khám phá một số dự án tiêu biểu mà chúng tôi đã thực hiện thành công, thể hiện năng lực và chất lượng dịch vụ.'
		>
			<div className={styles.projectsGrid}>
				{projects.map((project, index) => (
					<div key={index} className={`cyber-card ${styles.projectCard}`}>
						<div className='cyber-grid'></div>
						<div className={styles.projectImageWrap}>
							<Image
								src={project.image || PLACEHOLDER_IMAGES.NOT_FOUND}
								alt={project.title}
								width={400}
								height={300}
								className={styles.projectImage}
							/>
							<div className={styles.projectCategoryWrap}>
								<span className={styles.projectCategory}>{project.category}</span>
							</div>
							<div className={styles.projectImageOverlay}></div>
						</div>

						<div className={styles.projectContent}>
							<h3 className='cyber-title'>{project.title}</h3>
							<p className={styles.projectDesc}>{project.description}</p>

							{/* Project Info */}
							<div className={styles.projectInfo}>
								<div className={styles.projectInfoItem}>
									<Calendar className={styles.projectInfoIcon} />
									{project.duration}
								</div>
								<div className={styles.projectInfoItem}>
									<MapPin className={styles.projectInfoIcon} />
									{project.location}
								</div>
							</div>

							{/* Highlights */}
							<div className={styles.projectHighlights}>
								{project.highlights.map((highlight, idx) => (
									<div key={idx} className='cyber-feature'>
										{highlight}
									</div>
								))}
							</div>

							<Link href={COMPANY_INFO.contact.zalo} target='_blank' className={'cta cyber'}>
								Tư vấn dự án tương tự
								<ArrowRight className={styles.projectButtonIcon} />
							</Link>
						</div>
					</div>
				))}
			</div>
		</PageSection>
	);
}
