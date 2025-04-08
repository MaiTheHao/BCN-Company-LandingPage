import { montserrat } from '@/app/fonts';
import styles from './CustomSubTitle.module.scss';

interface CustomSubTitleProps {
	title: string;
}

export default function CustomSubTitle({ title }: CustomSubTitleProps) {
	return <h2 className={`${styles.title} ${montserrat.className} font-semibold capitalize font-orange`}>{title}</h2>;
}
