import React from 'react';

type Props = {
	customContainerClassName?: string;
	customBlockClassName?: string;
	customAdditionalClassName?: string;
	customID: string;
	children: React.ReactNode;
};

/**
 * Thành phần BodyPageTemplate cung cấp một cấu trúc cơ bản để tạo bố cục trang với các lớp CSS tùy chỉnh.
 *
 * @param {string} [customContainerClassName=''] - Tên lớp CSS tùy chỉnh cho phần tử container gốc.
 * @param {string} [customBlockClassName=''] - Tên lớp CSS tùy chỉnh cho phần tử khối bên trong.
 * @param {string} [customAdditionalClassName=''] - Tên lớp CSS tùy chỉnh cho phần tử bổ sung.
 * @param {string} [customID=''] - ID tùy chỉnh cho phần tử container gốc.
 * @param {React.ReactNode} children - Nội dung con được hiển thị bên trong khối.
 *
 * @returns {JSX.Element} Thành phần BodyPageTemplate.
 */
function BodyPageTemplate({
	customContainerClassName = '',
	customBlockClassName = '',
	customAdditionalClassName = '',
	customID,
	children,
}: Props) {
	return (
		<div id={customID} className={`root-container ${customContainerClassName}`}>
			<div className={`root-additional-class ${customAdditionalClassName}`}></div>
			<div className={`root-block ${customBlockClassName}`}>{children}</div>
		</div>
	);
}

export default BodyPageTemplate;
