import NotFound from '@/components/shared/NotFound/NotFound';
import React from 'react';

type Props = {};

function RootNotFound({}: Props) {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
			<NotFound
				message='Trang không tồn tại hoặc đã bị xóa.'
				turnBack={{ text: 'Quay về trang chủ', href: '/' }}
			/>
		</div>
	);
}

export default RootNotFound;
