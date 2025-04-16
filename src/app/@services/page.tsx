import BodyPageTemplate from '@/components/body_page_template/BodyPageTemplate';
import React from 'react';
import styles from './Services.module.scss';
import { montserrat, open_sans } from '../fonts';
import CustomSubTitle from '@/components/custom_sub_title/CustomSubTitle';
import { Metadata } from 'next';
import ListServices from '@/components/list_services/ListServices';
import { ServiceItem } from '@/interfaces/services';

export const metadata: Metadata = {
	title: 'Dịch vụ | Cơ khí Vạn Năng',
	description:
		'Dịch vụ gia công cơ khí chính xác: Tiện, Hàn, Phay, Bào, CNC. Chất lượng đảm bảo, uy tín, chuyên nghiệp với đội ngũ giàu kinh nghiệm.',
	keywords: [
		'dịch vụ cơ khí',
		'gia công cơ khí',
		'tiện chính xác',
		'hàn chuyên nghiệp',
		'phay đa trục',
		'bán buôn thiết bị công nghiệp',
		'tủ điện',
		'phụ kiện điều khiển',
		'cơ khí Bình Dương',
		'gia công CNC',
		'chất lượng cao',
		'đội ngũ kinh nghiệm',
	],
	openGraph: {
		title: 'Dịch vụ | Cơ khí Vạn Năng',
		description:
			'Dịch vụ gia công cơ khí chính xác: Tiện, Hàn, Phay, Bào, CNC. Chất lượng đảm bảo, uy tín với hơn 25 năm kinh nghiệm.',
		siteName: 'Cơ khí Vạn Năng',
		locale: 'vi_VN',
		type: 'website',
	},
};

type Props = {};

const SERVICES_PAGE_CONFIG = {
	customID: 'services',
	classes: {
		container: styles.container,
		additional: styles.additional,
		block: styles.block,
	},
};

const services: ServiceItem[] = [
	{
		title: 'Tiện chính xác',
		description:
			'Đảm bảo độ chính xác cao với tay nghề giàu kinh nghiệm, phù hợp cho các chi tiết đòi hỏi độ tin cậy và độ bền',
		image: '/images/services-1.webp',
		alt: 'Dịch vụ tiện chính xác',
	},
	{
		title: 'Hàn chuyên nghiệp',
		description:
			'Áp dụng nhiều phương pháp hàn truyền thống đến các phương pháp hiện đại, đáp ứng mọi yêu cầu kỹ thuật và độ bền sản phẩm',
		image: '/images/services-2.webp',
		alt: 'Hàn chuyên nghiệp',
	},
	{
		title: 'Phay đa trục',
		description:
			'Xử lý linh hoạt các bề mặt phức tạp với công nghệ phay đa trục, đáp ứng các yêu cầu kỉ thuật phức tạp',
		image: '/images/services-3.webp',
		alt: 'Phay đa trục',
	},
	{
		title: 'CNC & Thiết kế 3D',
		description:
			'Cung cấp giải pháp cắt dây CNC chính xác cùng dịch vụ hỗ trợ thiết kế 3D, biến ý tưởng thành sản phẩm hoàn thiện.',
		image: '/images/services-4.webp',
		alt: 'CNC & Thiết kế 3D',
	},
	{
		title: 'Bán buôn thiết bị và linh kiện máy công nghiệp',
		description:
			'Cung cấp máy móc, linh kiện công nghiệp như mô tơ, máy bơm, biến tần – phục vụ hiệu quả cho dây chuyền sản xuất hiện đại',
		image: '/images/services-5.webp',
		alt: 'bán buôn thiết bị và linh kiện máy công nghiệp',
	},
	{
		title: 'Phân phối tủ điện và phụ kiện điều khiển',
		description:
			'Chuyên cung cấp tủ điện, màn hình điều khiển, mạch điện – đảm bảo an toàn và tối ưu hoá hệ thống vận hành',
		image: '/images/services-6.webp',
		alt: 'Phân phối tủ điện và phụ kiện điều khiển',
	},
];

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
			<ListServices
				services={services}
				styles={{
					list: styles.list,
					list_item: styles.list_item,
					list_item_detail: styles.list_item_detail,
					list_item_detail_overlay: styles.list_item_detail_overlay,
					list_item_detail_description: styles.list_item_detail_description,
				}}
			/>
		</BodyPageTemplate>
	);
}

export default Services;
