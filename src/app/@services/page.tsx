import BodyPageTemplate from '@/components/body__page_template/BodyPageTemplate';
import React from 'react';
import styles from './Services.module.scss';
import { montserrat, open_sans } from '../fonts';
import CustomSubTitle from '@/components/custom_sub_title/CustomSubTitle';
import Image from 'next/image';

type Props = {};

const SERVICES_PAGE_CONFIG = {
	customID: 'services',
	classes: {
		container: styles.container,
		additional: styles.additional,
		block: styles.block,
	},
};

function Services({}: Props) {
	return (
		<BodyPageTemplate
			customID={SERVICES_PAGE_CONFIG.customID}
			customContainerClassName={SERVICES_PAGE_CONFIG.classes.container}
			customAdditionalClassName={SERVICES_PAGE_CONFIG.classes.additional}
			customBlockClassName={SERVICES_PAGE_CONFIG.classes.block}
		>
			<div className={styles.top}>
				<div className={styles.title}>
					<CustomSubTitle title='Các dịch vụ chính' />
					<h1 className={`${montserrat.className} font-bold capitalize font-blue-dark`}>
						Chất lượng đảm bảo
						<br /> uy tín, chuyên nghiệp với đội ngũ giàu kinh nghiệm
					</h1>
				</div>
				<p className={`${styles.description} ${open_sans.className} font-thin font-white`}>
					Chúng tôi chuyên gia công cơ khí chính xác:{' '}
					<strong className='font-semibold'>Tiện, Hàn, Phay, Bào, CNC</strong> theo yêu cầu. Với máy móc hiện
					đại, kỹ sư hơn 25 năm kinh nghiệm, chúng tôi đảm bảo chất lượng, tối ưu chi phí và hỗ trợ thiết kế
					3D. Cam kết giao hàng đúng hẹn, bảo hành dài lâu. Liên hệ ngay để được tư vấn!
				</p>
			</div>
			<ul className={styles.list}>
				<li className={styles.list_item}>
					<div className={styles.list_item_detail}>
						<Image src='/images/services-1.webp' alt='Dịch vụ tiện chính xác' fill />
						<div className={styles.list_item_detail_overlay} />
						<div className={`${styles.list_item_detail_description} font-white`}>
							<h3 className={`${montserrat.className}  font-semibold capitalize`}>Tiện chính xác</h3>
							<p className={`${open_sans.className} font-regular`}>
								Đảm bảo độ chính xác cao với tay nghề giàu kinh nghiệm, phù hợp cho các chi tiết đòi hỏi
								độ tin cậy và độ bền
							</p>
						</div>
					</div>
				</li>
				<li className={styles.list_item}>
					<div className={styles.list_item_detail}>
						<Image src='/images/services-2.webp' alt='Hàn chuyên nghiệp' fill />
						<div className={styles.list_item_detail_overlay} />
						<div className={`${styles.list_item_detail_description} font-white`}>
							<h3 className={`${montserrat.className}  font-semibold capitalize`}>Hàn chuyên nghiệp</h3>
							<p className={`${open_sans.className} font-regular`}>
								Áp dụng nhiều phương pháp hàn truyền thống đến các phương pháp hiện đại, đáp ứng mọi yêu
								cầu kỹ thuật và độ bền sản phẩm
							</p>
						</div>
					</div>
				</li>
				<li className={styles.list_item}>
					<div className={styles.list_item_detail}>
						<Image src='/images/services-3.webp' alt='Phay đa trục' fill />
						<div className={styles.list_item_detail_overlay} />
						<div className={`${styles.list_item_detail_description} font-white`}>
							<h3 className={`${montserrat.className}  font-semibold capitalize`}>Phay đa trục</h3>
							<p className={`${open_sans.className} font-regular`}>
								Xử lý linh hoạt các bề mặt phức tạp với công nghệ phay đa trục, đáp ứng các yêu cầu kỉ
								thuật phức tạp
							</p>
						</div>
					</div>
				</li>
				<li className={styles.list_item}>
					<div className={styles.list_item_detail}>
						<Image src='/images/services-4.webp' alt='Phay đa trục' fill />
						<div className={styles.list_item_detail_overlay} />
						<div className={`${styles.list_item_detail_description} font-white`}>
							<h3 className={`${montserrat.className}  font-semibold capitalize`}>
								Bán buôn thiết bị và linh kiện máy công nghiệp
							</h3>
							<p className={`${open_sans.className} font-regular`}>
								Cung cấp máy móc, linh kiện công nghiệp như mô tơ, máy bơm, biến tần – phục vụ hiệu quả
								cho dây chuyền sản xuất hiện đại
							</p>
						</div>
					</div>
				</li>
				<li className={styles.list_item}>
					<div className={styles.list_item_detail}>
						<Image src='/images/services-5.webp' alt='Phay đa trục' fill />
						<div className={styles.list_item_detail_overlay} />
						<div className={`${styles.list_item_detail_description} font-white`}>
							<h3 className={`${montserrat.className}  font-semibold capitalize`}>
								Phân phối tủ điện và phụ kiện điều khiển
							</h3>
							<p className={`${open_sans.className} font-regular`}>
								Chuyên cung cấp tủ điện, màn hình điều khiển, mạch điện – đảm bảo an toàn và tối ưu hoá
								hệ thống vận hành
							</p>
						</div>
					</div>
				</li>
			</ul>
		</BodyPageTemplate>
	);
}

export default Services;
