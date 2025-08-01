'use client';

import { MapPin, Phone, Clock, MessageCircle, Users, Headphones } from 'lucide-react';
import Link from 'next/link';
import styles from './Contact.module.scss';
import PageSection from '@/components/shared/PageSection/PageSection';
import Image from 'next/image';

import ZaloSrc from '@/assets/icons/zalo.svg';
import FacebookSrc from '@/assets/icons/facebook.svg';

export function ContactSection() {
	return (
		<PageSection
			id='contact'
			subtitle='Liên Hệ Với Chúng Tôi'
			title='Kết Nối Ngay Hôm Nay'
			description='Liên hệ trực tiếp qua Zalo OA để được tư vấn miễn phí và nhận báo giá nhanh chóng. Theo dõi Facebook để cập nhật tiến độ dự án.'
			className={styles.contactSection}
		>
			<div className={styles.grid}>
				{/* Main Contact Channels */}
				<div className={styles.channels}>
					{/* Zalo OA */}
					<div className='cyber-card'>
						<div className='cyber-grid' />
						<div className={styles.cardContent}>
							<div className={styles.cardHeader}>
								<div className={styles.cardIcon}>
									<div className={styles.cardIconWrap}>
										<Image src={ZaloSrc} fill alt='Chat Zalo OA' />
									</div>
								</div>
								<div>
									<h3 className={styles.cardTitle}>Zalo OA - Tư Vấn Trực Tiếp</h3>
									<p className={styles.cardDesc}>Kênh chính để tư vấn, báo giá và theo dõi dự án</p>
								</div>
							</div>
							<div className={styles.features}>
								<div className='cyber-feature'>
									<Headphones className={styles.iconAccentSmall} />
									Tư vấn miễn phí 24/7
								</div>
								<div className='cyber-feature'>
									<Users className={styles.iconAccentSmall} />
									Nhận báo giá chi tiết trong 30 phút
								</div>
								<div className='cyber-feature'>
									<Clock className={styles.iconAccentSmall} />
									Theo dõi tiến độ dự án realtime
								</div>
							</div>
							<Link href='https://zalo.me/2444516135385989317' target='_blank' className='cta cyber'>
								<Image src={ZaloSrc} fill alt='Chat Zalo OA' />
								Chat Zalo OA Ngay
							</Link>
						</div>
					</div>
					{/* Facebook Fanpage */}
					<div className='cyber-card'>
						<div className='cyber-grid' />
						<div className={styles.cardContent}>
							<div className={styles.cardHeader}>
								<div className={styles.cardIcon}>
									<div className={styles.cardIconWrap}>
										<Image src={FacebookSrc} fill alt='Facebook Fanpage' />
									</div>
								</div>
								<div>
									<h3 className={styles.cardTitle}>Facebook Fanpage</h3>
									<p className={styles.cardDesc}>Cập nhật quy trình làm việc và dự án mới nhất</p>
								</div>
							</div>
							<div className={styles.features}>
								<div className='cyber-feature'>
									<Users className={styles.iconFacebookSmall} />
									Xem quy trình gia công trực tiếp
								</div>
								<div className='cyber-feature'>
									<Clock className={styles.iconFacebookSmall} />
									Cập nhật dự án và công nghệ mới
								</div>
								<div className='cyber-feature'>
									<MessageCircle className={styles.iconFacebookSmall} />
									Tương tác và đặt câu hỏi
								</div>
							</div>
							<Link
								href='https://www.facebook.com/profile.php?id=61572695349782'
								target='_blank'
								className='cta cyber'
							>
								<Image src={FacebookSrc} fill alt='Facebook Fanpage' />
								Theo Dõi Facebook
							</Link>
						</div>
					</div>
				</div>
				{/* Company Information */}
				<div className={styles.info}>
					{/* Quick Contact */}
					<div className={styles.infoCard}>
						<h3 className={styles.infoTitle}>Thông Tin Liên Hệ</h3>
						<div className={styles.infoList}>
							<div className={styles.infoItem}>
								<MapPin className={styles.iconAccentInfo} />
								<div>
									<div className={styles.infoLabel}>Địa chỉ xưởng</div>
									<div className={styles.infoValue}>
										522, Tổ 1, Khu Phố 8, Uyên Hưng,
										<br />
										Tân Uyên, Bình Dương, Vietnam
									</div>
								</div>
							</div>
							<div className={styles.infoItem}>
								<Phone className={styles.iconAccentInfo} />
								<div>
									<div className={styles.infoLabel}>Hotline</div>
									<Link href='tel:+84944432430' className={styles.infoPhone}>
										+84 944 432 430
									</Link>
								</div>
							</div>
							<div className={styles.infoItem}>
								<Clock className={styles.iconAccentInfo} />
								<div>
									<div className={styles.infoLabel}>Giờ làm việc</div>
									<div className={styles.infoValue}>
										7:30 - 16:30 (Thứ 2 - Thứ 7)
										<br />
										<span className={styles.infoAccent}>Tư vấn Zalo 24/7</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Call to Action */}
					<div className={styles.ctaCard}>
						<h3 className={styles.ctaTitle}>Sẵn Sàng Bắt Đầu Dự Án?</h3>
						<p className={styles.ctaDesc}>
							Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn
						</p>
						<div className={styles.ctaActions}>
							<Link href='https://zalo.me/2444516135385989317' target='_blank' className='cta cyber'>
								<Image src={ZaloSrc} fill alt='Chat Zalo OA' />
								Nhận Báo Giá Qua Zalo
							</Link>
							<Link href='tel:+84944432430' className='cta secondary'>
								<Phone />
								Gọi Ngay: +84 944 432 430
							</Link>
						</div>
					</div>
					{/* Company Legal Info */}
					<div className={styles.infoCard}>
						<h3 className={styles.legalTitle}>Thông Tin Doanh Nghiệp</h3>
						<div className={styles.legalList}>
							<div className={styles.legalItem}>
								<span>Tên công ty:</span>
								<span className={styles.legalValue}>Công Ty TNHH Cơ Khí Vạn Năng</span>
							</div>
							<div className={styles.legalItem}>
								<span>Mã số thuế:</span>
								<span className={styles.legalValue}>3703143102</span>
							</div>
							<div className={styles.legalItem}>
								<span>Năm thành lập:</span>
								<span className={styles.legalValue}>2025</span>
							</div>
							<div className={styles.legalItem}>
								<span>Kinh nghiệm:</span>
								<span className={styles.legalAccent}>25+ năm</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Map */}
			<div className={styles.mapWrap}>
				<div className={styles.mapCard}>
					<div className={styles.mapContent}>
						<div className={styles.mapInfo}>
							<MapPin className={styles.mapIcon} />
							<p className={styles.mapTitle}>Vị Trí Xưởng Gia Công</p>
							<p>Bản đồ Google Maps sẽ được tích hợp tại đây</p>
							<p className={styles.mapAddress}>522, Tổ 1, Khu Phố 8, Uyên Hưng, Tân Uyên, Bình Dương</p>
						</div>
					</div>
				</div>
			</div>
		</PageSection>
	);
}
