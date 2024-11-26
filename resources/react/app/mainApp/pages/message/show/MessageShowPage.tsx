import React, {ReactNode} from 'react';
import {useParams} from "react-router-dom";
import {useGetMessages} from "@/react/api/query/MessageQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import ErrorPage from "@/react/app/mainApp/pages/error/Error";
import MessageShowContext from "@mainFeatures/message/context/MessageShowContext";

const MessageShowPage = () => {
	const params = useParams()
	const {data: talkRoomData, isLoading, isError, isSuccess} = useGetMessages(params.partnerUuid as string)
	console.log(talkRoomData);
	let context: ReactNode
	if (isLoading){
		context = <ContentsLoader/>
	}
	if (isError){
		context = <ErrorPage/>
	}
	if (isSuccess){
		context = <MessageShowContext talkRoomData={talkRoomData}/>
	}
	return (
		<MainLayout>
			{context}
		</MainLayout>
	);
};

export default MessageShowPage;
