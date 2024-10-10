import React from 'react';
import {useGetMessageLists} from "@/react/api/query/MessageQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import ContainerMd from "@/react/app/mainApp/components/layouts/container/ContainerMd/ContainerMd";
import {MessageGroupType} from "@/react/types/MessageGroupType";
import {ListCard} from "@mainFeatures/message/components";

const MessageListPage = () => {
	const {data: messageLists = []} = useGetMessageLists()

	return (
		<MainLayout>
			<PageTitle en={'MESSAGE'} jp={'メッセージ一覧'}/>
			<ContainerMd>
				{messageLists.map((room: MessageGroupType, index: number) => (
					<ListCard room={room} key={index}/>
				))}
			</ContainerMd>
		</MainLayout>
	);
};

export default MessageListPage;
