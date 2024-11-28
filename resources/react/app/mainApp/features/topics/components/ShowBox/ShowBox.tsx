import React from 'react';
import {formatBr} from "@/react/app/mainApp/functions/formatter"
import {NoticeType} from "@/react/types/NoticeType";

const ShowBox: React.FC<{topicData: NoticeType}> = ({topicData}) => {
	return (
		<div className={'mt-10'}>
			{formatBr(topicData.body)}
		</div>
	);
};

export default ShowBox;
