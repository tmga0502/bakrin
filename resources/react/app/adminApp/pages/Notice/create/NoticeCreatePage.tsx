import React from 'react';
import MainLayout from "@adminLayouts/MainLayout/MainLayout";
import NoticeCreateContents from "@adminFeatures/notice/contents/NoticeCreateContents";

const NoticeCreatePage = () => {
	return (
		<MainLayout>
			<NoticeCreateContents/>
		</MainLayout>
	);
};

export default NoticeCreatePage;
