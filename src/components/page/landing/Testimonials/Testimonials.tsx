import { Star } from 'lucide-react';
import PageSection from '@/components/shared/PageSection/PageSection';
import styles from './Testimonials.module.scss';
import Image from 'next/image';
import PLACEHOLDER_IMAGES from '@/consts/placeholder-images';

const testimonials = [
	{
		name: 'Nguyễn Văn Minh',
		position: 'Giám Đốc Kỹ Thuật',
		company: 'Công ty Cơ Khí ABC',
		content:
			'Vạn Năng đã hỗ trợ chúng tôi gia công các chi tiết máy với độ chính xác tuyệt đối. Chất lượng sản phẩm vượt mong đợi và giao hàng luôn đúng hạn.',
		rating: 5,
		avatar: null,
	},
	{
		name: 'Trần Thị Lan',
		position: 'Trưởng Phòng Sản Xuất',
		company: 'Nhà máy Dệt May XYZ',
		content:
			'Đội ngũ kỹ thuật của Vạn Năng rất chuyên nghiệp. Họ đã giúp chúng tôi tối ưu hóa quy trình sản xuất và giảm đáng kể chi phí vận hành.',
		rating: 5,
		avatar: null,
	},
	{
		name: 'Lê Hoàng Nam',
		position: 'Chủ Tịch HĐQT',
		company: 'Tập đoàn Công nghiệp DEF',
		content:
			'Chúng tôi đã hợp tác với Vạn Năng trong nhiều dự án lớn. Sự tận tâm và chất lượng dịch vụ của họ luôn khiến chúng tôi hài lòng và tin tưởng.',
		rating: 5,
		avatar: null,
	},
];

export function Testimonials() {
	return (
		<PageSection
			id='testimonials'
			subtitle='Khách Hàng Nói Gì'
			title='Phản Hồi Từ Khách Hàng'
			description='Sự hài lòng của khách hàng là động lực để chúng tôi không ngừng cải tiến và nâng cao chất lượng dịch vụ.'
			className={styles.testimonials}
		>
			<div className={styles.testimonialsGrid}>
				{testimonials.map((testimonial, index) => (
					<div key={index} className={`cyber-testimonial ${styles.testimonialCard}`}>
						<div className='cyber-grid'></div>
						{/* Rating */}
						<div className={styles.rating}>
							{[...Array(testimonial.rating)].map((_, i) => (
								<Star key={i} className={styles.starIcon} />
							))}
						</div>
						{/* Content */}
						<p className={styles.content}>"{testimonial.content}"</p>
						{/* Author */}
						<div className={styles.author}>
							<div className={styles.avatarWrap}>
								<Image
									src={testimonial.avatar || PLACEHOLDER_IMAGES.NOT_FOUND}
									alt={testimonial.name}
									className={styles.avatar}
								/>
							</div>
							<div>
								<div className='cyber-title'>{testimonial.name}</div>
								<div className={styles.position}>{testimonial.position}</div>
								<div className={styles.company}>{testimonial.company}</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className={styles.statsWrap}>
				<div className={styles.statsGrid}>
					<div>
						<div className={styles.statValue}>500+</div>
						<div className={styles.statLabel}>Khách Hàng Tin Tưởng</div>
					</div>
					<div>
						<div className={styles.statValue}>1000+</div>
						<div className={styles.statLabel}>Dự Án Hoàn Thành</div>
					</div>
					<div>
						<div className={styles.statValue}>99%</div>
						<div className={styles.statLabel}>Khách Hàng Hài Lòng</div>
					</div>
					<div>
						<div className={styles.statValue}>25+</div>
						<div className={styles.statLabel}>Năm Kinh Nghiệm</div>
					</div>
				</div>
			</div>
		</PageSection>
	);
}
