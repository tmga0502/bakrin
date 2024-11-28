import React from 'react';
import {PageTitle} from "@mainElements/title";
import {ListBox} from "@mainFeatures/topics/components";
import {NoticeType} from "@/react/types/NoticeType";

const TopicsListContents: React.FC<{topicsData:NoticeType[]}> = ({topicsData}) => {
	return (
		<>
			<PageTitle en={'TOPICS'} jp={'お知らせ'}/>
			{topicsData.map(topics => (
				<ListBox topicData={topics} key={topics.id} />
			))}
		</>
	);
};

export default TopicsListContents;
