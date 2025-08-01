'use client';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import COMPANY_INFO from '@/data/company-info';
import styles from '../Header.module.scss';

type Props = {};

function CTAs({}: Props) {
	return (
		<div className={styles.ctas}>
			<Link
				href={`tel:${COMPANY_INFO.contact.phone}`}
				className={`${styles.phone} cta secondary small`}
				target='_blank'
				rel='noopener noreferrer'
			>
				<Phone />
				{COMPANY_INFO.contact.phone}
			</Link>
			<Link
				href={COMPANY_INFO.contact.zalo}
				className={`cta primary small`}
				target='_blank'
				rel='noopener noreferrer'
			>
				<MessageCircle />
				Báo giá ngay
			</Link>
		</div>
	);
}

export default CTAs;
