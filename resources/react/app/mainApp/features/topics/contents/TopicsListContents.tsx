import React from 'react';
import {PageTitle} from "@mainElements/title";
import {ListBox} from "@mainFeatures/topics/components";
import {TopicsType} from "@mainFeatures/topics/types/type";

const TopicsListContents: React.FC<TopicsType> = ({topicsData}) => {
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
