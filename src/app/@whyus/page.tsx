import BodyPageTemplate from '@/components/body_page_template/BodyPageTemplate';
import styles from './WhyUs.module.scss';
import CustomSubTitle from '@/components/custom_sub_title/CustomSubTitle';
import CTA from '@/components/CTA/CTA';
import { COMPANY_CONTACT } from '@data';
import Image from 'next/image';
import { montserrat, open_sans } from '../fonts';

type Props = {};

const WHYUS_PAGE_CONFIG = {
	customID: 'whyus',
	classes: {
		container: styles.container,
		additional: styles.additional,
		block: styles.block,
	},
};

function WhyUs({}: Props) {
	return (
		<BodyPageTemplate
			customID={WHYUS_PAGE_CONFIG.customID}
			customContainerClassName={WHYUS_PAGE_CONFIG.classes.container}
			customAdditionalClassName={WHYUS_PAGE_CONFIG.classes.additional}
			customBlockClassName={WHYUS_PAGE_CONFIG.classes.block}
		>
			<div className={styles.right}>
				<div className={styles.content}>
					<CustomSubTitle title='Lý Do Nên Chọn Chúng Tôi' />
					<h1 className={`${montserrat.className} font-bold font-white capitalize`}>
						Chất lượng ổn định, uy tín Vạn Năng là lựa chọn Đáng tin cậy
					</h1>
					<ul className={`${open_sans.className} font-gray-xlight font-thin`}>
						<li>
							<Image src='/svgs/icons/arrow.svg' alt='list style - arrow' width={16} height={16} />
							<p>
								<strong className={`font-semibold`}>Đội ngũ chuyên môn cao:</strong> Đội ngũ công nhân
								lành nghề, hơn 10 năm kinh nghiệm, cam kết chất lượng, tiến độ và giá cả hợp lý.
							</p>
						</li>
						<li>
							<Image src='/svgs/icons/arrow.svg' alt='list style - arrow' width={16} height={16} />
							<p>
								<strong className={`font-semibold`}>Trang thiết bị hiện đại:</strong> Hệ thống máy móc
								tiên tiến, đáp ứng nhu cầu đa dạng, đảm bảo độ chính xác cao trong từng sản phẩm.
							</p>
						</li>
						<li>
							<Image src='/svgs/icons/arrow.svg' alt='list style - arrow' width={16} height={16} />
							<p>
								<strong className={`font-semibold`}>Dịch vụ đa dạng:</strong> Không chỉ tập trung vào
								gia công cơ khí, Chúng tôi còn cung cấp gia công cơ khí, thiết bị, phụ tùng máy công
								nghiệp, mô tơ, máy bơm, máy biến tần, tủ điện và linh kiện điện tử, phục vụ đa dạng nhu
								cầu khách hàng.
							</p>
						</li>
						<li>
							<Image src='/svgs/icons/arrow.svg' alt='list style - arrow' width={16} height={16} />
							<p>
								<strong className={`font-semibold`}>Uy tín & trách nhiệm:</strong> Dưới sự điều hành của
								ông Mai Thanh Tiền, chúng tôi cam kết cung cấp giải pháp cơ khí toàn diện, từ thiết kế
								đến thi công, phục vụ khách hàng trong và ngoài Bình Dương.
							</p>
						</li>
					</ul>
				</div>
				<CTA
					href={COMPANY_CONTACT.zalo}
					fullWidth={true}
					title='liên hệ gia công tức thì'
					iconSrc='/svgs/icons/zalo-transparent-white.svg'
				/>
			</div>
		</BodyPageTemplate>
	);
}

export default WhyUs;
