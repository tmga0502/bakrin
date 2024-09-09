import React, {useEffect, useRef} from 'react';
import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {MessageContainer, MessageViewer, MessageForm} from "@/react/app/mainApp/features/message";
import MessageBlock from "../../../features/message/block/MessageBlock";
import {useParams} from "react-router-dom";
import {useGetMessages} from "@/react/api/query/MessageQuery";
import Loader from "@/react/app/mainApp/features/loader/Loader";
import {MessageType} from "@/react/types/MessageType";

const MessageShow = () => {
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const params = useParams()
	const {data: MessagesData, isLoading} = useGetMessages(params.producerUuid as string)
	const messageDataCount = MessagesData ? MessagesData.length : 0
	console.log(MessagesData)

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'instant' });
	};

	useEffect(() => {
		scrollToBottom();
	}, []);

	if(isLoading) return <Loader/>

	return (
		<MainAppLayout>
			<div className="max-w-2xl h-full max-h-full mx-auto mt-10">
				<MessageContainer>
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
