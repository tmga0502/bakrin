import React from 'react';
import ContainerMd from "@adminLayouts/container/ContainerMd/ContainerMd";
import CreateButton from "@adminFeatures/notice/components/CreateButton/CreateButton";
import MainTitle from "@adminLayouts/title/MainTitle/MainTitle";
import List from "@adminFeatures/notice/components/List/List";
import {NoticeType} from "@/react/types/NoticeType";

const NoticeListContents: React.FC<{noticeListData: NoticeType[]}> = ({noticeListData}) => {
	return (
		<ContainerMd>
			<MainTitle title={'お知らせ一覧'}/>
			<CreateButton/>
			<List noticeListData={noticeListData}/>
		</ContainerMd>
	);
};

export default NoticeListContents;
