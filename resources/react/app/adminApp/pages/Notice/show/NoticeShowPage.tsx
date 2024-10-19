import React, {ReactNode} from 'react';
import {useParams} from "react-router-dom";
import {useGetData} from "@/react/api/query/NoticeQuery";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@adminLayouts/error";
import NoticeShowContents from "@adminFeatures/notice/contents/NoticeShowContents";
import MainLayout from "@adminLayouts/MainLayout/MainLayout";

const NoticeShowPage = () => {
	const params = useParams()
	const {data, isLoading} = useGetData(params.uuid as string)

	let contents: ReactNode
	if (isLoading){
		contents = <ContentsLoader/>
	}else if (!data){
		contents = <CanNotGetData/>
	}else{
		contents = <NoticeShowContents noticeData={data}/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default NoticeShowPage;
