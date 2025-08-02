import Image from 'next/image';
import styles from './HeroSection.module.scss';
import { CheckCircle, ArrowRight, Play } from 'lucide-react';
import { LANDING_PAGE_SECTIONS } from '@/consts/landing-page';
import COMPANY_INFO from '@/data/company-info';
import Link from 'next/link';

import CompanyOverviewSrc from '@/assets/images/company-overview.svg';

type Props = {};

function HeroSection({}: Props) {
	return (
		<section className={styles.heroSection} id={LANDING_PAGE_SECTIONS.hero.id}>
			<div className={styles.container}>
				<div className={styles.grid}>
					{/* Content */}
					<div className={styles.content}>
						<div className={styles.contentInner}>
							<div className={`accent-title`}>{COMPANY_INFO.slogan}</div>
							<h1 className={styles.title}>
								Gia Công <span className={styles.titleAccent}>Tiện - Hàn - Phay - Bào - CNC</span>
								<br />
								Chuẩn Xác & Bền Bỉ Theo Thời Gian!
							</h1>
							<p className={styles.description}>{COMPANY_INFO.description}</p>
						</div>

						{/* Key Features */}
						<div className={styles.featuresGrid}>
							<div className={styles.featureItem}>
								<CheckCircle className={styles.featureIcon} />
								<span className={styles.featureText}>Hơn 25 năm kinh nghiệm</span>
							</div>
							<div className={styles.featureItem}>
								<CheckCircle className={styles.featureIcon} />
								<span className={styles.featureText}>Đội ngũ lành nghề</span>
							</div>
							<div className={styles.featureItem}>
								<CheckCircle className={styles.featureIcon} />
								<span className={styles.featureText}>Thành phẩm đạt chuẩn</span>
							</div>
							<div className={styles.featureItem}>
								<CheckCircle className={styles.featureIcon} />
								<span className={styles.featureText}>Giao hàng đúng hạn</span>
							</div>
						</div>

						{/* CTAs */}
						<div className={styles.ctaGroup}>
							<Link href={COMPANY_INFO.contact.zalo} target='_blank' className='cta primary small'>
								Nhận Báo Giá Ngay
								<ArrowRight className={styles.ctaIconRight} />
							</Link>

							<Link href={`#${LANDING_PAGE_SECTIONS.services.id}`} className='cta secondary small'>
								<Play className={styles.ctaIconLeft} />
								Xem Dịch Vụ
							</Link>
						</div>
					</div>

					{/* Hero Image */}
					<div className={styles.heroImageWrapper}>
						<div className={styles.heroImageInner}>
							<Image
								src={CompanyOverviewSrc}
								alt='Xưởng gia công cơ khí Vạn Năng'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px'
								className={styles.heroImage}
								priority
								fill
							/>
						</div>

						{/* Floating Stats */}
						<div className={styles.statLeft}>
							<div className={styles.statContent}>
								<div className={styles.statNumber}>25+</div>
								<div className={styles.statLabel}>Năm Kinh Nghiệm</div>
							</div>
						</div>

						<div className={styles.statRight}>
							<div className={styles.statContent}>
								<div className={styles.statNumber}>{'> '}90%</div>
								<div className={styles.statLabelRight}>Khách Hàng Hài Lòng</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
