import styles from './PageSection.module.scss';

type Props = {
	id?: string;
	className?: string;
	children?: React.ReactNode;

	subtitle?: string;
	title?: string;
	description?: string;
};

function PageSection({ className, children, subtitle, title, description, id }: Props) {
	return (
		<section className={`${styles.pageSection} ${className ?? ''}`} id={id}>
			<div className={styles.container}>
				<div className={styles.header}>
					{subtitle && <div className={`accent-title`}>{subtitle}</div>}
					{title && <h2 className={styles.title}>{title}</h2>}
					{description && <p className={styles.description}>{description}</p>}
				</div>
				{children}
			</div>
		</section>
	);
}

export default PageSection;
