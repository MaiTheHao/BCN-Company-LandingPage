import React from 'react';
import BodyPageTemplate from '@/components/body_page_template/BodyPageTemplate';
import styles from './FAQS.module.scss';
import { montserrat, open_sans } from '../fonts';
import Image from 'next/image';
import FQASSearch from '@/components/faqs_search/FQASSearch';

type Props = {};

const FAQS_PAGE_CONFIG = {
	customID: 'faqs',
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

function FAQS({}: Props) {
	return (
		<>
			<BodyPageTemplate
				customID={FAQS_PAGE_CONFIG.customID}
				customContainerClassName={FAQS_PAGE_CONFIG.classes.top.container}
				customAdditionalClassName={FAQS_PAGE_CONFIG.classes.top.additional}
				customBlockClassName={FAQS_PAGE_CONFIG.classes.top.block}
			>
				<div className={styles.top_block_title}>
					<i>
						<Image
							src={'/svgs/icons/question.svg'}
							fill
							alt='Câu hỏi thường gặp - Cty TNHH cơ khí Vạn Năng'
						/>
					</i>
					<h1 className={`${montserrat.className} font-bold uppercase font-white`}>FAQS</h1>
				</div>
				<span className={`${styles.top_block_sub} ${open_sans.className} font-regular font-gray-light`}>
					Đang có thắc mắc? Hãy tìm ngay câu trả lời trong phần Tìm kiếm dưới đây!
				</span>
			</BodyPageTemplate>
			<BodyPageTemplate
				customID={`${FAQS_PAGE_CONFIG.customID}-content`}
				customContainerClassName={FAQS_PAGE_CONFIG.classes.body.container}
				customAdditionalClassName={FAQS_PAGE_CONFIG.classes.body.additional}
				customBlockClassName={FAQS_PAGE_CONFIG.classes.body.block}
			>
				<FQASSearch />
			</BodyPageTemplate>
		</>
	);
}

export default FAQS;
