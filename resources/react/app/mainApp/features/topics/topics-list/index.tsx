import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import ListBox from "@/react/app/mainApp/features/topics/topics-list/components/ListBox/ListBox";
import {TopicsType} from "@/react/app/mainApp/features/topics/topics-list/types/type";

const Index:React.FC<TopicsType> = ({topicsData}) => {
	return (
		<>
			<PageTitle en={'TOPICS'} jp={'お知らせ'}/>
			{topicsData.map(topics => (
				<ListBox data={topics} key={topics.id}/>
			))}
		</>
	);
};

export default Index;
