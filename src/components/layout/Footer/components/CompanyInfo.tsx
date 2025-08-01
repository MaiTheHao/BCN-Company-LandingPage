import React from 'react';
import styles from '../Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook } from 'lucide-react';
import ZaloIconSrc from '@/assets/icons/zalo.svg';
import LogoSrc from '@/assets/logos/logo-full--blue-blue-orange.svg';
import COMPANY_INFO from '@/data/company-info';

const CompanyInfo = () => (
	<div className={styles.companyInfo}>
		<Link href='/' className={styles.logoLink}>
			<Image
				src={LogoSrc}
				alt={`${COMPANY_INFO.name} Logo`}
				width={160}
				height={90.8}
				className={styles.logoImage}
				priority
			/>
		</Link>
		<p className={styles.companyText}>
			Chúng tôi cung cấp dịch vụ gia công cơ khí và chế tạo máy, với cam kết chất lượng và tiến độ.
		</p>
		<div className={styles.socialLinks}>
			<Link href={COMPANY_INFO.contact.facebook} className={styles.socialBtn} target='_blank'>
				<Facebook className={styles.socialIcon} />
			</Link>
			<Link href={COMPANY_INFO.contact.zalo} className={styles.socialBtn} target='_blank'>
				<Image src={ZaloIconSrc} alt='Zalo' width={18} height={18} className={styles.socialIcon} />
			</Link>
		</div>
	</div>
);

export default CompanyInfo;
