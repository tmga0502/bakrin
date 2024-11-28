import React from 'react';
import {IoMdArrowDropright} from "react-icons/io";
import {Link} from "react-router-dom";
import {NoticeType} from "@/react/types/NoticeType";

const ListBox: React.FC<{ topicData: NoticeType }> = ({topicData}) => {
	return (
		<Link to={'/info/' + topicData.uuid}>
			<div className={'px-4 py-2 mb-1 border-b border-b-bakGray'}>
				<div className={'flex justify-between items-center'}>
					<p>{topicData.title}</p>
					<p>
						<IoMdArrowDropright className="text-xl"/>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default ListBox;
