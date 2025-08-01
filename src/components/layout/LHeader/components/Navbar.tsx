'use client';
import { memo } from 'react';
import styles from '../Header.module.scss';
import Link from 'next/link';
import { INavItem } from '@/interfaces/nav-item.interface';

type Props = {
	items: INavItem[];
	className?: string;
};

function Navbar({ items, className }: Props) {
	return (
		<nav className={`${styles.navbar} ${className}`}>
			<ul className={styles.navList}>
				{items.map((item, index) => (
					<li key={index} className={styles.navItem}>
						<Link href={item.href} className={styles.navLink}>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default memo(Navbar);
