import React from 'react';
import styles from '../Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook } from 'lucide-react';
import ZaloIconSrc from '@/assets/icons/zalo.svg';
import COMPANY_INFO from '@/data/company-info';

const ContactActions = () => (
	<div className={styles.contactActions}>
		<h3 className={styles.title}>Liên Hệ Ngay</h3>
		<div className={styles.contactLinks}>
			<Link href={COMPANY_INFO.contact.zalo} target='_blank' className={styles.contactLink}>
				<Image src={ZaloIconSrc} alt='Zalo' width={18} height={18} className={styles.contactIcon} />
				<span>Chat Zalo để báo giá</span>
			</Link>
			<Link href={COMPANY_INFO.contact.facebook} target='_blank' className={styles.contactLink}>
				<Facebook size={18} />
				<span>Theo dõi fanpage</span>
			</Link>
		</div>
		<div className={styles.statsGrid}>
			<div className={styles.statBox}>
				<div className={styles.statValue}>500+</div>
				<div className={styles.statLabel}>Khách hàng</div>
			</div>
			<div className={styles.statBox}>
				<div className={styles.statValue}>99%</div>
				<div className={styles.statLabel}>Hài lòng</div>
			</div>
		</div>
	</div>
);

export default ContactActions;
