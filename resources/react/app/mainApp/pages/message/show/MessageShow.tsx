import React, {useEffect, useRef} from 'react';
import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {MessageContainer, MessageViewer, MessageForm} from "@/react/app/mainApp/features/message";
import MessageBlock from "../../../features/message/block/MessageBlock";
import {useParams} from "react-router-dom";
import {useGetMessages} from "@/react/api/query/MessageQuery";
import Loader from "@/react/app/mainApp/features/loader/Loader";
import {MessageType} from "@/react/types/MessageType";
import {ScrollEndMessageBox} from "@/react/app/mainApp/functions/ScrollEnd";
import MessageHeader from "../../../features/message/header/MessageHeader";
import {useGetProducer} from "@/react/api/query/ProducerQuery";

const MessageShow = () => {
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const params = useParams()
	const {data: MessagesData, isLoading} = useGetMessages(params.producerUuid as string)
	const {data: PartnerProducer, isLoading: producerLading} = useGetProducer(params.producerUuid)
	const messageDataCount = MessagesData ? MessagesData.length : 0

	useEffect(() => {
		ScrollEndMessageBox(messagesEndRef);
	}, [MessagesData]);

	if(isLoading && producerLading) return <Loader/>

	return (
		<MainAppLayout>
			<div className="max-w-2xl h-full max-h-full mx-auto mt-10">
				<MessageContainer>
					<MessageHeader name={PartnerProducer?.organizationName}/>
					<MessageViewer>
						{MessagesData?.map((message: MessageType, index: number) => {
							const layout = params.producerUuid === message.senderUuid ? 'receiver' : 'sender';
							const ref = index === messageDataCount - 1 ? messagesEndRef : null
							return(
								<MessageBlock imgPath={message.sender.imgPath} name={message.sender.organizationName} text={message.message} layout={layout} ref={ref} key={message.id}/>
							)

						})}

					</MessageViewer>
					<MessageForm/>
				</MessageContainer>
			</div>
		</MainAppLayout>
	);
};

export default MessageShow;
