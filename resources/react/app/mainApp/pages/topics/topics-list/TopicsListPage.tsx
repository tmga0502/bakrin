import React from 'react';
import {TopicsData} from "@/react/app/mainApp/_dummyData/TopicsData";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import {ListBox} from "@mainFeatures/topics/components";

const TopicsListPage = () => {
	const topicsData = [] = TopicsData
    return (
       <MainLayout>
		   <PageTitle en={'TOPICS'} jp={'お知らせ'}/>
		   {topicsData.map(topics => (
			   <ListBox data={topics} key={topics.id}/>
		   ))}
	   </MainLayout>
    );
};

export default TopicsListPage;
