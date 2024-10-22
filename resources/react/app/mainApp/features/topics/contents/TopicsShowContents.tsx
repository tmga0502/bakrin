import React from 'react';
import {PageTitle} from "@mainElements/title";
import {ShowBox} from "@mainFeatures/topics/components";
import {TopicType} from "@mainFeatures/topics/types/type";

const TopicsShowContents: React.FC<TopicType> = ({topicData}) => {
	return (
		<>
			<PageTitle en={'TOPICS'} jp={'〇〇についてのおしらせ'}/>
			<ShowBox topicData={topicData}/>
		</>
	);
};

export default TopicsShowContents;
