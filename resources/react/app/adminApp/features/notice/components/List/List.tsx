import React from 'react';
import MainCard from "@adminLayouts/Card/MainCard/MainCard";
import {Link} from "react-router-dom";
import {NoticeType} from "@/react/types/NoticeType";

const List: React.FC<{noticeListData: NoticeType[]}> = ({noticeListData}) => {
	return (
		<>
			{noticeListData?.map(data => (
				<Link to={`/admin/notice/show/${data.uuid}`} className={'block mb-4'} key={data.id}>
					<MainCard>
						{data.title}
					</MainCard>
				</Link>
			))}
		</>
	);
};

export default List;
