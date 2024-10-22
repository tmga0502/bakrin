import React from 'react';
import {Box} from './ShowBox.styles';
import {TopicType} from "@mainFeatures/topics/types/type";
import {formatBr} from "@/react/app/mainApp/functions/formatter"

const ShowBox: React.FC<TopicType> = ({topicData}) => {
	return (
		<div css={Box}>
			{formatBr(topicData.body)}
		</div>
	);
};

export default ShowBox;
