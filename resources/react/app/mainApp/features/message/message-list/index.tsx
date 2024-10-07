import React from 'react';
import {IndexType} from "@/react/app/mainApp/features/message/message-list/types/type";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import ContainerMd from "@/react/app/mainApp/components/layout/container/ContainerMd/ContainerMd";
import Card from "@/react/app/mainApp/features/message/message-list/components/Card/Card";


const Index: React.FC<IndexType> = ({messageLists}) => {
	return (
		<>
			<PageTitle en={'MESSAGE'} jp={'メッセージ一覧'}/>
			<ContainerMd>
				{messageLists.map((room: any, index: number) => (
					<Card room={room} key={index}/>
				))}
			</ContainerMd>
		</>
	);
};

export default Index;
