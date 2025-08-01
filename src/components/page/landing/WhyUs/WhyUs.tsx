import PageSection from '@/components/shared/PageSection/PageSection';
import styles from './WhyUs.module.scss';
import { Award, Clock, Shield, Users, Zap, Target, CheckCircle, TrendingUp } from 'lucide-react';
import COMPANY_INFO from '@/data/company-info';

const features = [
	{
		icon: Award,
		title: 'Hơn 25 Năm Kinh Nghiệm',
		description: 'Đội ngũ kỹ sư và thợ lành nghề với kinh nghiệm sâu rộng trong ngành cơ khí.',
		stat: '25+',
		statLabel: 'Năm',
	},
	{
		icon: Zap,
		title: 'Thiết Bị Hiện Đại',
		description: 'Trang bị máy móc, thiết bị tiên tiến nhất để đảm bảo chất lượng sản phẩm.',
		stat: '100%',
		statLabel: 'Hiện Đại',
	},
	{
		icon: Target,
		title: 'Độ Chính Xác Cao',
		description: 'Cam kết độ chính xác dưới 0.01mm cho mọi sản phẩm gia công.',
		stat: '<0.01mm',
		statLabel: 'Độ Chính Xác',
	},
	{
		icon: Clock,
		title: 'Giao Hàng Đúng Hạn',
		description: 'Quy trình sản xuất được tối ưu để đảm bảo tiến độ giao hàng cam kết.',
		stat: '99%',
		statLabel: 'Đúng Hạn',
	},
	{
		icon: Shield,
		title: 'Chất Lượng Ổn Định',
		description: 'Hệ thống kiểm soát chất lượng nghiêm ngặt đảm bảo sản phẩm luôn đạt chuẩn.',
		stat: 'ISO',
		statLabel: 'Chuẩn',
	},
	{
		icon: Users,
		title: 'Đội Ngũ Chuyên Nghiệp',
		description: 'Thợ lành nghề với hơn 10 năm kinh nghiệm, tận tâm và có trách nhiệm.',
		stat: '10+',
		statLabel: 'Năm KN',
	},
	{
		icon: CheckCircle,
		title: 'Bảo Hành Dài Hạn',
		description: 'Cam kết bảo hành dài hạn và hỗ trợ kỹ thuật sau bán hàng.',
		stat: '24/7',
		statLabel: 'Hỗ Trợ',
	},
	{
		icon: TrendingUp,
		title: 'Thiết Kế 3D Hỗ Trợ',
		description: 'Dịch vụ thiết kế 3D chuyên nghiệp giúp tối ưu hóa sản phẩm.',
		stat: '3D',
		statLabel: 'Thiết Kế',
	},
];

export default function WhyUs() {
	return (
		<PageSection
			id='about'
			subtitle='Tại Sao Chọn Chúng Tôi'
			title='Cam Kết Chất Lượng Hàng Đầu'
			description='Với hơn 25 năm kinh nghiệm và đội ngũ chuyên nghiệp, chúng tôi tự hào mang đến những giải pháp cơ khí tối ưu nhất cho khách hàng.'
			className={styles.whyUs}
		>
			<div className={styles.featuresGrid}>
				{features.map((feature, index) => (
					<div key={index} className={`cyber-card ${styles.featureCard}`}>
						<div className='cyber-grid' />
						<div className={styles.cardContent}>
							<div className={styles.iconWrap}>
								<div className='cyber-icon'>
									<feature.icon />
								</div>
							</div>
							<div className={styles.statWrap}>
								<div className='cyber-stat'>{feature.stat}</div>
								<div className={styles.statLabel}>{feature.statLabel}</div>
							</div>
							<h3 className={`cyber-title ${styles.cardTitle}`}>{feature.title}</h3>
							<p className={styles.cardDescription}>{feature.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className={styles.companyInfoWrap}>
				<div className={styles.companyInfoCard}>
					<h3 className={styles.companyTitle}>{COMPANY_INFO.name}</h3>
					<div className={styles.companyDesc}>{COMPANY_INFO.description}</div>
					<div className={styles.companyDetailsGrid}>
						<div className={styles.companyDetail}>
							<CheckCircle className={styles.detailIcon} /> Mã số thuế: {COMPANY_INFO.taxId}
						</div>
						<div className={styles.companyDetail}>
							<CheckCircle className={styles.detailIcon} /> Giờ làm việc: {COMPANY_INFO.workingTime.hours}
						</div>
						<div className={styles.companyDetail}>
							<CheckCircle className={styles.detailIcon} /> {COMPANY_INFO.workingTime.weekdays}
						</div>
						<div className={styles.companyDetail}>
							<CheckCircle className={styles.detailIcon} /> Tư vấn 24/7
						</div>
					</div>
				</div>
				<div className={styles.companyStatsCard}>
					<div className={styles.companyStat}>
						<span>1000+</span>
						<div>Dự Án Hoàn Thành</div>
					</div>
					<div className={styles.companyStat}>
						<span>500+</span>
						<div>Khách Hàng Tin Tưởng</div>
					</div>
				</div>
			</div>
		</PageSection>
	);
}
