import React from 'react';
import {PageTitle} from "@mainElements/title";
import {ShowBox} from "@mainFeatures/topics/components";
import {NoticeType} from "@/react/types/NoticeType";

const TopicsShowContents: React.FC<{ topicData: NoticeType }> = ({topicData}) => {
	return (
		<>
			<PageTitle en={'TOPICS'} jp={'〇〇についてのおしらせ'}/>
			<ShowBox topicData={topicData}/>
		</>
	);
};

export default TopicsShowContents;
