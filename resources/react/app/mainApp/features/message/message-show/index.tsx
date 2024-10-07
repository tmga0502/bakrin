import React, {useEffect, useRef} from 'react';
import {MessageType} from "@/react/types/MessageType";
import {ScrollEndMessageBox} from "@/react/app/mainApp/functions/ScrollEnd";
import {MessageShowType} from "@/react/app/mainApp/features/message/message-show/types/type";
import {Wrapper} from './index.styles'
import {MessageBlock, MessageContainer, MessageForm, MessageHeader, MessageViewer} from "@/react/app/mainApp/components/layout/message";
import {useParams} from "react-router-dom";

const Index: React.FC<MessageShowType> = ({MessagesData, PartnerProducer}) => {
	const params = useParams();
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const messageDataCount = MessagesData ? MessagesData.length : 0

	useEffect(() => {
		ScrollEndMessageBox(messagesEndRef);
	}, [MessagesData]);

	return (
		<div css={Wrapper}>
			<MessageContainer>
				<MessageHeader name={PartnerProducer?.organizationName}/>
				<MessageViewer>
					{MessagesData?.map((message: MessageType, index: number) => {
						const layout = params.producerUuid === message.senderUuid ? 'receiver' : 'sender';
						const ref = index === messageDataCount - 1 ? messagesEndRef : null
						return (
							<MessageBlock imgPath={message.sender.imgPath} name={message.sender.organizationName} text={message.message} layout={layout} ref={ref} key={message.id}/>
						)

					})}

				</MessageViewer>
				<MessageForm/>
			</MessageContainer>
		</div>
	);
};

export default Index;
