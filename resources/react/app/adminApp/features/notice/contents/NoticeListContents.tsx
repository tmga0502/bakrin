import React from 'react';
import ContainerMd from "@adminLayouts/container/ContainerMd/ContainerMd";
import {NoticeListType} from "@adminFeatures/notice/types/type";
import CreateButton from "@adminFeatures/notice/components/CreateButton/CreateButton";
import MainTitle from "@adminLayouts/title/MainTitle/MainTitle";
import List from "@adminFeatures/notice/components/List/List";

const NoticeListContents: React.FC<NoticeListType> = ({noticeListData}) => {
	return (
		<ContainerMd>
			<MainTitle title={'お知らせ一覧'}/>
			<CreateButton/>
			<List noticeListData={noticeListData}/>
		</ContainerMd>
	);
};

export default NoticeListContents;
