import React from 'react';
import {useParams} from "react-router-dom";
import {useGetMessages} from "@/react/api/query/MessageQuery";
import {useGetProducer} from "@/react/api/query/ProducerQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import MessageShow from "@/react/app/mainApp/features/message/message-show";

const MessageShowPage = () => {
	const params = useParams()
	const {data: MessagesData} = useGetMessages(params.producerUuid as string)
	const {data: PartnerProducer} = useGetProducer(params.producerUuid)

	return (
		<MainLayout>
			{MessagesData !== undefined && PartnerProducer !== undefined ? (
				<MessageShow MessagesData={MessagesData} PartnerProducer={PartnerProducer}/>
			):(
				<CanNotGetData/>
			)}
		</MainLayout>
	);
};

export default MessageShowPage;
