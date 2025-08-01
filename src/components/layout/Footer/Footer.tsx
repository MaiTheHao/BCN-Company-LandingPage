import BottomSection from './components/BottomSection';
import CompanyInfo from './components/CompanyInfo';
import ContactActions from './components/ContactActions';
import styles from './Footer.module.scss';
import Strengths from './components/Strengths';

type Props = {};

function Footer({}: Props) {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.container}`}>
				<div className={styles.grid}>
					<CompanyInfo />
					<Strengths />
					<ContactActions />
				</div>
				<BottomSection />
			</div>
		</footer>
	);
}

export default Footer;
