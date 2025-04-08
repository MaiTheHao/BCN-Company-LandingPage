export interface SumaryItem {
	icon: string;
	title: string;
	href: string;
}

export interface FooterDetailSumaryProps {
	logoSrc: string;
	logoAlt: string;
	sumaryItems: SumaryItem[];
}

export interface SocialMedia {
	icon: string;
	href: string;
}

export interface NavSubItem {
	title: string;
	href: string;
}

export interface NavItem {
	title: string;
	items?: NavSubItem[];
	socialMedia?: SocialMedia[];
}

export interface FooterDetailNavProps {
	navItems?: NavItem[];
}
