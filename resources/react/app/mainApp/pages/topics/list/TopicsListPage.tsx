import React from 'react';
import {TopicsData} from "@/react/app/mainApp/_dummyData/TopicsData";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import TopicsList from "@/react/app/mainApp/features/topics/topics-list";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";

const TopicsListPage = () => {
	const topicsData = TopicsData
    return (
       <MainLayout>
		   {topicsData !== undefined ? (
			   <TopicsList topicsData={topicsData}/>
		   ):(
			   <CanNotGetData/>
		   )}
	   </MainLayout>
    );
};

export default TopicsListPage;
