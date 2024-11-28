import React, {ReactNode} from 'react';
import MainLayout from "@mainLayouts//MainLayout/MainLayout";
import {useParams} from "react-router-dom";
import {useGetData} from "@/react/api/query/NoticeQuery";
import PageLoader from "@mainLayouts/Loader/PageLoader/PageLoader";
import {CanNotGetData} from "@mainLayouts/error";
import TopicsShowContents from "@mainFeatures/topics/contents/TopicsShowContents";

const TopicsShowPage = () => {
	const params = useParams();
	const {data: topicData, isLoading} = useGetData(params.uuid as string)

	let contents: ReactNode;
	if (isLoading){
		contents = <PageLoader/>
	}else if (!topicData){
		contents = <CanNotGetData/>
	}else{
		contents = <TopicsShowContents topicData={topicData}/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default TopicsShowPage;
