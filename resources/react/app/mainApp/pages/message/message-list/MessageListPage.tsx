import React from 'react';
import {useGetMessageLists} from "@/react/api/query/MessageQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import MessageList from "@/react/app/mainApp/features/message/message-list";

const MessageListPage = () => {
	const {data: messageLists} = useGetMessageLists()

	return (
		<MainLayout>
			{messageLists !== undefined ? (
				<MessageList messageLists={messageLists}/>
			):(
				<CanNotGetData/>
			)}

		</MainLayout>
	);
};

export default MessageListPage;
