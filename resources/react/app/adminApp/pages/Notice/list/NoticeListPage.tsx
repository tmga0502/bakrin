import React, {ReactNode} from 'react';
import MainLayout from "@adminLayouts/MainLayout/MainLayout";
import NoticeListContents from "@adminFeatures/notice/contents/NoticeListContents";
import {useGetAll} from "@/react/api/query/NoticeQuery";
import ContentsLoader from "@adminLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@adminLayouts/error";

const NoticeListPage = () => {

	const {data, isLoading} = useGetAll()

	let contents: ReactNode
	if (isLoading){
		contents = <ContentsLoader/>
	}else if(!data){
		contents = <CanNotGetData />
	}else{
		contents = <NoticeListContents noticeListData={data}/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default NoticeListPage;
