'use client';
import Navbar from './components/Navbar';
import styles from './Header.module.scss';
import CTAs from './components/CTAs';
import Logo from './components/Logo';
import { useRef, useState } from 'react';
import { INavItem } from '@/interfaces/nav-item.interface';
import Link from 'next/link';
import COMPANY_INFO from '@/data/company-info';
import { MessageCircle } from 'lucide-react';
import { LANDING_PAGE_SECTIONS } from '@/consts/landing-page';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useCallback } from 'react';

type Props = {};

const NavItems: INavItem[] = [
	{ label: LANDING_PAGE_SECTIONS.services.label, href: `#${LANDING_PAGE_SECTIONS.services.id}` },
	{ label: LANDING_PAGE_SECTIONS.about.label, href: `#${LANDING_PAGE_SECTIONS.about.id}` },
	{ label: LANDING_PAGE_SECTIONS.projects.label, href: `#${LANDING_PAGE_SECTIONS.projects.id}` },
	{ label: LANDING_PAGE_SECTIONS.contact.label, href: `#${LANDING_PAGE_SECTIONS.contact.id}` },
];

function Header({}: Props) {
	const [isHBGMenuOpen, setIsHBGMenuOpen] = useState(false);

	const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
	const toggleHBGMenu = () => {
		setIsHBGMenuOpen((prev) => !prev);
	};

	const handleClickOutside = useCallback(() => {
		setIsHBGMenuOpen(false);
	}, []);

	const hbgMenuRef = useClickOutside<HTMLDivElement>({
		onClickOutside: handleClickOutside,
		toggleButtonRef: toggleBtnRef,
	});

	return (
		<header className={styles.header}>
			<div className={`container ${styles.container}`}>
				{/* Logo */}
				<Logo />

				{/* Navbar */}
				<Navbar items={NavItems} className={styles.tabletNavbar} />

				{/* Hamburger Menu */}
				<button
					type='button'
					onClick={toggleHBGMenu}
					aria-label='Mở menu'
					className={`${styles.hamburgerMenuButton} ${isHBGMenuOpen ? styles.active : ''}`}
					ref={toggleBtnRef}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				{/* Call to Action Buttons */}
				<CTAs />
			</div>
			{/* Hamburger Menu */}
			{isHBGMenuOpen && (
				<div ref={hbgMenuRef} className={`${styles.hamburgerMenu} container`}>
					<Navbar items={NavItems} className={styles.mobileNavbar} />
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
			)}
		</header>
	);
}

export default Header;
