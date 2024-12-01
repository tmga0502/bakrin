import React from 'react';
import MainTitle from "@adminLayouts/title/MainTitle/MainTitle";
import ContainerSm from "@adminLayouts/container/ContainerSm/ContainerSm";
import DataBox from "@adminFeatures/notice/components/DataBox/DataBox";
import DeleteButton from "@adminFeatures/notice/components/DeleteButton/DeleteButton";
import {NoticeType} from "@/react/types/NoticeType";

const NoticeShowContents: React.FC<{noticeData: NoticeType}> = ({noticeData}) => {
	return (
		<div>
			<MainTitle title={'お知らせ 【詳細】'}/>
			<ContainerSm>
				<DataBox noticeData={noticeData}/>
				<DeleteButton noticeData={noticeData}/>
			</ContainerSm>
		</div>
	);
};

export default NoticeShowContents;
