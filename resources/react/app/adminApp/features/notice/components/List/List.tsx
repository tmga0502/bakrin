import React from 'react';
import {NoticeListType} from "@adminFeatures/notice/types/type";
import MainCard from "@adminLayouts/Card/MainCard/MainCard";
import {Link} from "react-router-dom";
import { ListStyle } from './List.styles';

const List: React.FC<NoticeListType> = ({noticeListData}) => {
	return (
		<>
			{noticeListData?.map(data => (
				<Link to={`/admin/notice/show/${data.uuid}`} css={ListStyle} key={data.id}>
					<MainCard>
						{data.title}
					</MainCard>
				</Link>
			))}
		</>
	);
};

export default List;
