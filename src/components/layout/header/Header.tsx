import React from 'react';
import styles from './Header.module.scss';
import { COMPANY_INFO, COMPANY_CONTACT } from '@data';
import Image from 'next/image';
import HeaderNavItem from '../header_nav_item/HeaderNavItem';
import { open_sans } from '@/app/fonts';
import { INavItem } from '@/interfaces/header';

const COMPANY_LOCATION = COMPANY_INFO.location;
const NAV_ITEMS: INavItem[] = [
	{
		icon: 'svgs/icons/zalo-default.svg',
		title: 'Zalo OA',
		subtitle: 'Liên hệ qua Zalo OA',
		href: COMPANY_CONTACT.zalo,
	},
	{
		icon: 'svgs/icons/facebook-default.svg',
		title: 'Facebook',
		subtitle: 'Fanpage của chúng tôi',
		href: COMPANY_CONTACT.facebook,
	},
	{
		icon: 'svgs/icons/location-default.svg',
		title: COMPANY_LOCATION.address.province,
		subtitle: `${COMPANY_LOCATION.address.street}, ${COMPANY_LOCATION.address.area}, ${COMPANY_LOCATION.address.ward}, ${COMPANY_LOCATION.address.city}`,
		href: COMPANY_CONTACT.googleMap,
	},
];

/**
 * Thành phần Header hiển thị thanh điều hướng chính của trang web, bao gồm logo, các mục điều hướng,
 * và menu di động. Thành phần này sử dụng các thành phần con như `HeaderNavItem` để hiển thị
 * các mục điều hướng chi tiết.
 *
 * @component
 *
 * @returns {JSX.Element} Thành phần Header.
 *
 * @description
 * - Logo: Hiển thị logo của công ty.
 * - Thanh điều hướng: Hiển thị danh sách các mục điều hướng chính, được tạo từ mảng `NAV_ITEMS`.
 * - Menu di động: Hiển thị menu dạng biểu tượng, phù hợp với giao diện trên thiết bị di động.
 *
 * @example
 * ```tsx
 * import Header from './Header';
 *
 * function App() {
 *   return (
 *     <Header />
 *   );
 * }
 * ```
 */
function Header() {
	return (
		<div className={`root-container ${styles.container}`}>
			<div className={`root-block ${styles.box}`}>
				<div className={`${styles.logo}`}>
					<Image src={'svgs/logo-1.svg'} alt='Logo' width={69.47} height={40} />
				</div>
				<div className={`${styles.nav}`}>
					{[...NAV_ITEMS].reverse().map((item, index) => (
						<HeaderNavItem
							key={`header-nav-item-${index}`}
							icon={item.icon}
							title={item.title}
							subtitle={item.subtitle}
							href={item.href}
						/>
					))}
				</div>
				<div className={`${styles.menuWrapper}`}>
					<Image src={'svgs/icons/menu.svg'} alt='Menu' width={24} height={24} />
					<div className={`${styles.menu}`}>
						{NAV_ITEMS.map((item, index) => (
							<div key={`menu-item-${index}`} className={`${styles.menu_item} ${open_sans.className}`}>
								<Image src={item.icon} alt={item.title} width={24} height={24} />
								<span className='font-regular font-white'>{item.title}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
