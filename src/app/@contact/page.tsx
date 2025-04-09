import BodyPageTemplate from '@/components/body_page_template/BodyPageTemplate';
import styles from './Contact.module.scss';
import { montserrat, open_sans } from '../fonts';
import Image from 'next/image';
import CTA from '@/components/CTA/CTA';
import { COMPANY_CONTACT } from '@data';

type Props = {};

const CONTACT_PAGE_CONFIG = {
	customID: 'contact',
	classes: {
		top: {
			container: styles.top_container,
			additional: styles.top_additional,
			block: styles.top_block,
		},
		body: {
			container: styles.body_container,
			additional: styles.body_additional,
			block: styles.body_block,
		},
	},
};

function Contact({}: Props) {
	return (
		<>
			<BodyPageTemplate
				customID={CONTACT_PAGE_CONFIG.customID}
				customContainerClassName={CONTACT_PAGE_CONFIG.classes.top.container}
				customAdditionalClassName={CONTACT_PAGE_CONFIG.classes.top.additional}
				customBlockClassName={CONTACT_PAGE_CONFIG.classes.top.block}
			>
				<div className={styles.top_block_title}>
					<i>
						<Image src={'/svgs/icons/global.svg'} fill alt='Liên hệ với Cty TNHH cơ khí Vạn Năng' />
					</i>
					<h1 className={`${montserrat.className} font-bold uppercase font-white`}>Liên Hệ</h1>
				</div>
				<span className={`${styles.top_block_sub} ${open_sans.className} font-regular font-gray-light`}>
					Liên hệ để tìm hiểu dịch vụ, quy trình và giải pháp cơ khí chất lượng
				</span>
			</BodyPageTemplate>
			<BodyPageTemplate
				customID={`${CONTACT_PAGE_CONFIG.customID}-content`}
				customContainerClassName={CONTACT_PAGE_CONFIG.classes.body.container}
				customAdditionalClassName={CONTACT_PAGE_CONFIG.classes.body.additional}
				customBlockClassName={CONTACT_PAGE_CONFIG.classes.body.block}
			>
				<ul>
					<li>
						<div>
							<h2 className={`${montserrat.className} font-semibold font-blue-dark capitalize`}>
								Tư vấn nhanh, báo giá chính xác và đặt gia công
							</h2>
							<p className={`${open_sans.className} font-regular font-gray`}>
								Zalo OA là nơi bạn có thể dễ dàng trao đổi yêu cầu, nhận báo giá chính xác và theo dõi
								tiến trình gia công, giúp quá trình làm việc nhanh chóng và hiệu quả.
							</p>
						</div>
						<CTA
							href={COMPANY_CONTACT.zalo}
							title='Liên hệ ngay'
							iconSrc='/svgs/icons/zalo-default.svg'
							textTransform='none'
							color='blue'
						/>
					</li>
					<li>
						<div>
							<h2 className={`${montserrat.className} font-semibold font-blue-dark capitalize`}>
								Khám phá quy trình làm việc và các dự án thực tế
							</h2>
							<p className={`${open_sans.className} font-regular font-gray`}>
								Theo dõi Fanpage giúp bạn cập nhật liên tục quy trình làm việc minh bạch, chuyên nghiệp
								và dễ dàng lựa chọn dịch vụ phù hợp nhất với nhu cầu của mình.
							</p>
						</div>
						<CTA
							href={COMPANY_CONTACT.facebook}
							title='Khám phá ngay'
							iconSrc='/svgs/icons/facebook-default.svg'
							textTransform='none'
							color='blue'
						/>
					</li>
				</ul>
			</BodyPageTemplate>
		</>
	);
}

export default Contact;
