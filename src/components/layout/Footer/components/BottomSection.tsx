import React from 'react';
import styles from '../Footer.module.scss';
import COMPANY_INFO from '@/data/company-info';

const BottomSection = () => (
	<div className={styles.bottom}>
		<div className={styles.copyright}>© 2025 {COMPANY_INFO.name}</div>
		<div className={styles.mst}>MST: {COMPANY_INFO.taxId}</div>
	</div>
);

export default BottomSection;
