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
		title: 'Thiết Bị Đạt Chuẩn',
		description: 'Trang bị máy móc, thiết bị đạt chuẩn, đảm bảo chất lượng & độ chính xác cho mọi sản phẩm.',
		stat: '100%',
		statLabel: 'Đạt Chuẩn',
	},
	{
		icon: Target,
		title: 'Độ Chính Xác Cao',
		description: 'Cam kết mang đến độ chính xác cao cho từng chi tiết gia công, đáp ứng yêu cầu kỹ thuật.',
		stat: 'Đạt Chuẩn',
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
		description: 'Chất lượng sản phẩm được chúng tôi đảm bảo ổn định qua từng lô hàng.',
		stat: 'Tin Cậy',
		statLabel: 'Chất Lượng',
	},
	{
		icon: Users,
		title: 'Đội Ngũ Chuyên Nghiệp',
		description: 'Thợ lành nghề với hơn 10 năm kinh nghiệm, tận tâm và có trách nhiệm.',
		stat: '10+',
		statLabel: 'Năm Kinh Nghiệm',
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
			title='Cam Kết Chất Lượng & Dịch Vụ Tận Tâm'
			description='Với hơn 25 năm kinh nghiệm và đội ngũ lành nghề, chúng tôi tự hào mang đến những giải pháp cơ khí tối ưu nhất cho khách hàng.'
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
							<CheckCircle className={styles.detailIcon} /> Hơn 25 năm kinh nghiệm
						</div>
						<div className={styles.companyDetail}>
							<CheckCircle className={styles.detailIcon} /> Đội ngũ lành nghề
						</div>
						<div className={styles.companyDetail}>
							<CheckCircle className={styles.detailIcon} /> Chất lượng ổn định
						</div>
						<div className={styles.companyDetail}>
							<CheckCircle className={styles.detailIcon} /> Tư vấn 24/7
						</div>
					</div>
				</div>
				<div className={styles.companyStatsCard}>
					<div className={styles.companyStat}>
						<span>900+</span>
						<div>Dự Án Hoàn Thành</div>
					</div>
					<div className={styles.companyStat}>
						<span>200+</span>
						<div>Khách Hàng Tin Tưởng</div>
					</div>
				</div>
			</div>
		</PageSection>
	);
}
