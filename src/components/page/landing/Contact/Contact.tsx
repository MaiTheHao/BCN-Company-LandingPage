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
			className={styles['contact__section']}
		>
			<div className={styles['contact__grid']}>
				<div className={styles['contact__channels']}>
					<div className={`cyber-card ${styles['contact__card--zalo']}`}>
						<div className={styles['contact__card-content']}>
							<header className={styles['contact__card-header']}>
								<div className={styles['contact__card-icon']}>
									<div className={styles['contact__card-icon-wrap']}>
										<Image src={ZaloSrc} fill alt='Chat Zalo OA' priority />
									</div>
								</div>
								<div>
									<h3 className={styles['contact__card-title']}>Zalo OA - Tư Vấn Trực Tiếp</h3>
									<p className={styles['contact__card-desc']}>
										Kênh chính để tư vấn, báo giá và theo dõi dự án
									</p>
								</div>
							</header>
							<ul className={styles['contact__features']}>
								<li className='cyber-feature'>
									<Headphones className={styles['contact__feature']} />
									Tư vấn miễn phí 24/7
								</li>
								<li className='cyber-feature'>
									<Users className={styles['contact__feature']} />
									Nhận báo giá chi tiết trong 30 phút
								</li>
								<li className='cyber-feature'>
									<Clock className={styles['contact__feature']} />
									Theo dõi tiến độ dự án realtime
								</li>
							</ul>
							<Link
								href='https://zalo.me/2444516135385989317'
								target='_blank'
								className={`cta cyber ${styles['contact__link--zalo']}`}
							>
								<Image src={ZaloSrc} fill alt='Chat Zalo OA' priority />
								Chat Zalo OA Ngay
							</Link>
						</div>
					</div>
					<div className={`cyber-card ${styles['contact__card--facebook']}`}>
						<div className={styles['contact__card-content']}>
							<header className={styles['contact__card-header']}>
								<div className={styles['contact__card-icon']}>
									<div className={styles['contact__card-icon-wrap']}>
										<Image src={FacebookSrc} fill alt='Facebook Fanpage' priority />
									</div>
								</div>
								<div>
									<h3 className={styles['contact__card-title']}>Facebook - Theo Dõi Fanpage</h3>
									<p className={styles['contact__card-desc']}>
										Cập nhật quy trình làm việc và dự án mới nhất
									</p>
								</div>
							</header>
							<ul className={styles['contact__features']}>
								<li className='cyber-feature'>
									<Users className={styles['contact__feature']} />
									Xem quy trình gia công trực tiếp
								</li>
								<li className='cyber-feature'>
									<Clock className={styles['contact__feature']} />
									Cập nhật dự án và công nghệ mới
								</li>
								<li className='cyber-feature'>
									<MessageCircle className={styles['contact__feature']} />
									Tương tác và đặt câu hỏi
								</li>
							</ul>
							<Link
								href='https://www.facebook.com/profile.php?id=61572695349782'
								target='_blank'
								className={`cta cyber ${styles['contact__link--facebook']}`}
							>
								<Image src={FacebookSrc} fill alt='Facebook Fanpage' priority />
								Theo Dõi Facebook
							</Link>
						</div>
					</div>
				</div>
				<div className={styles['contact__info']}>
					<section className={styles['contact__info-card']}>
						<h3 className={styles['contact__info-title']}>Thông Tin Liên Hệ</h3>
						<ul className={styles['contact__info-list']}>
							<li className={styles['contact__info-item']}>
								<MapPin className={styles['contact__icon-accent-info']} />
								<div>
									<div className={styles['contact__info-label']}>Địa chỉ xưởng</div>
									<div className={styles['contact__info-value']}>
										522, Tổ 1, Khu Phố 8, Uyên Hưng,
										<br />
										Tân Uyên, Bình Dương, Vietnam
									</div>
								</div>
							</li>
							<li className={styles['contact__info-item']}>
								<Phone className={styles['contact__icon-accent-info']} />
								<div>
									<div className={styles['contact__info-label']}>Hotline</div>
									<Link href='tel:+84944432430' className={styles['contact__info-phone']}>
										+84 944 432 430
									</Link>
								</div>
							</li>
							<li className={styles['contact__info-item']}>
								<Clock className={styles['contact__icon-accent-info']} />
								<div>
									<div className={styles['contact__info-label']}>Giờ làm việc</div>
									<div className={styles['contact__info-value']}>
										7:30 - 16:30 (Thứ 2 - Thứ 7)
										<br />
										<span className={styles['contact__info-accent']}>Tư vấn Zalo 24/7</span>
									</div>
								</div>
							</li>
						</ul>
					</section>
					<section className={styles['contact__cta-card']}>
						<h3 className={styles['contact__cta-title']}>Sẵn Sàng Bắt Đầu Dự Án?</h3>
						<p className={styles['contact__cta-desc']}>
							Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn
						</p>
						<div className={styles['contact__cta-actions']}>
							<Link
								href='https://zalo.me/2444516135385989317'
								target='_blank'
								className={`cta cyber ${styles['contact__link--zalo']}`}
							>
								<Image src={ZaloSrc} fill alt='Chat Zalo OA' priority />
								Nhận Báo Giá Qua Zalo
							</Link>
							<Link href='tel:+84944432430' className='cta secondary'>
								<Phone />
								Gọi Ngay: +84 944 432 430
							</Link>
						</div>
					</section>
					<section className={styles['contact__info-card']}>
						<h3 className={styles['contact__legal-title']}>Thông Tin Doanh Nghiệp</h3>
						<ul className={styles['contact__legal-list']}>
							<li className={styles['contact__legal-item']}>
								<span>Tên công ty:</span>
								<span className={styles['contact__legal-value']}>Công Ty TNHH Cơ Khí Vạn Năng</span>
							</li>
							<li className={styles['contact__legal-item']}>
								<span>Mã số thuế:</span>
								<span className={styles['contact__legal-value']}>3703143102</span>
							</li>
							<li className={styles['contact__legal-item']}>
								<span>Năm thành lập:</span>
								<span className={styles['contact__legal-value']}>2025</span>
							</li>
							<li className={styles['contact__legal-item']}>
								<span>Kinh nghiệm:</span>
								<span className={styles['contact__legal-accent']}>25+ năm</span>
							</li>
						</ul>
					</section>
				</div>
			</div>
			<div className={styles['contact__map-wrap']}>
				<div className={styles['contact__map-card']}>
					<div className={styles['contact__map-content']}>
						<div className={styles['contact__map-info']}>
							<MapPin className={styles['contact__map-icon']} />
							<p className={styles['contact__map-title']}>Vị Trí Xưởng Gia Công</p>
							<p>Bản đồ Google Maps sẽ được tích hợp tại đây</p>
							<p className={styles['contact__map-address']}>
								522, Tổ 1, Khu Phố 8, Uyên Hưng, Tân Uyên, Bình Dương
							</p>
						</div>
					</div>
				</div>
			</div>
		</PageSection>
	);
}
