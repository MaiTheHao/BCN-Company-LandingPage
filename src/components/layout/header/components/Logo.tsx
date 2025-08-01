import Image from 'next/image';
import styles from '../Header.module.scss';
import Src from '@/assets/logos/logo-full--white.svg';
import Link from 'next/link';

type Props = {};

function Logo({}: Props) {
	return (
		<Link className={styles.logo} href='/'>
			<Image src={Src} alt='Logo' height={40} width={69.9} />
		</Link>
	);
}

export default Logo;
