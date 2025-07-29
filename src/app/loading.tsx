import React from 'react';
import './globals.scss';
import LoadingSpin from '@/components/loading-spin/LoadingSpin';

export const metadata = {
	title: 'Đang Tải | Cơ Khí Vạn Năng',
	description: 'Đang tải nội dung, vui lòng đợi trong giây lát.',
};

interface LoadingProps {
	title?: string;
}

const Loading: React.FC<LoadingProps> = ({ title = 'Đang tải...' }) => {
	return (
		<div className='root-container'>
			<div className='root-block'>
				<LoadingSpin title={title} />
			</div>
		</div>
	);
};

export default Loading;
