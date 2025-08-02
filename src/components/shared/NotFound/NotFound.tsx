import Image from 'next/image';
import styles from './NotFound.module.scss';
import CircleLogo from '@/assets/logos/logo-mini--blue-orange-blue.svg';
import Link from 'next/link';

type Props = {
	message?: string;
	turnBack?: {
		text: string;
		href: string;
	};
};

function NotFound({ message, turnBack }: Props) {
	return (
		<div className={`${styles.notFound}`}>
			<div className='cyber-grid'></div>
			<span className={styles.logo}>
				<span className={`${styles.logo__number} cyber-stat`}>4</span>
				<div className={`${styles.logo__image} cyber-icon`}>
					<Image src={CircleLogo} alt='Logo' fill />
				</div>
				<span className={`${styles.logo__number} cyber-stat`}>4</span>
			</span>
			<p className={`${styles.message}`}>{message || 'Tài nguyên không tồn tại.'}</p>
			{turnBack && (
				<Link href={turnBack?.href || '/'} className={`${styles.link} cyber-link`}>
					{turnBack?.text || 'Quay về trang chủ'}
				</Link>
			)}
		</div>
	);
}

export default NotFound;
