import React, {ReactNode} from 'react';
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {useGetAll} from "@/react/api/query/NoticeQuery";
import PageLoader from "@mainLayouts/Loader/PageLoader/PageLoader";
import {CanNotGetData} from "@mainLayouts/error";
import TopicsListContents from "@mainFeatures/topics/contents/TopicsListContents";

const TopicsListPage = () => {
	const {data: topicsData, isLoading} = useGetAll()

	let contents: ReactNode
	if (isLoading){
		contents = <PageLoader/>
	}else if (!topicsData){
		contents = <CanNotGetData/>
	}else{
		contents = <TopicsListContents topicsData={topicsData}/>
	}


	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default TopicsListPage;
