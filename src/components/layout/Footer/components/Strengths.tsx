import React from 'react';
import styles from '../Footer.module.scss';
import { Award, Flame, Clock } from 'lucide-react';

const Strengths = () => (
	<div className={styles.strengths}>
		<h3 className={styles.title}>Đặc Điểm Nổi Bật</h3>
		<div className={styles.strengthsList}>
			<div className={styles.strengthItem}>
				<Award className={styles.strengthIcon} />
				<span>25+ năm kinh nghiệm trong ngành</span>
			</div>
			<div className={styles.strengthItem}>
				<Flame className={styles.strengthIcon} />
				<span>Chất lượng và tâm huyết</span>
			</div>
			<div className={styles.strengthItem}>
				<Clock className={styles.strengthIcon} />
				<span>Hoàn thành đúng hạn</span>
			</div>
		</div>
	</div>
);

export default Strengths;
