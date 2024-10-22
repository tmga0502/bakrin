import React from 'react';
import {Box, ItemWrapper} from './ListBox.styles';
import {IoMdArrowDropright} from "react-icons/io";
import {Link} from "react-router-dom";
import {TopicType} from "@mainFeatures/topics/types/type";

const ListBox: React.FC<TopicType> = ({topicData}) => {
	return (
		<Link to={'/info/' + topicData.uuid}>
			<div css={Box}>
				<div css={ItemWrapper}>
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
