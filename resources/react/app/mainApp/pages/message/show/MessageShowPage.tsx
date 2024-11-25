import React, {useEffect, useRef} from 'react';
import {useParams} from "react-router-dom";
import {useGetMessages} from "@/react/api/query/MessageQuery";
import {useGetUser} from "@/react/api/query/UserQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {TalkRoomMessageType} from "@/react/types/TalkRoomMessageType";
import {UserType} from "@/react/types/UserType";
import {ScrollEndMessageBox} from "@mainFeatures/message/functions/ScrollEnd";
import {MessageBlock, MessageBoxWrapper, MessageContainer, MessageForm, MessageHeader, MessageViewer} from "@mainFeatures/message/components";
import {createImageUrl} from "@/react/app/mainApp/functions/formatter";

const MessageShowPage = () => {
	const params = useParams()
	const {data: MessagesData = []} = useGetMessages(params.userUuid as string)
	const {data: PartnerUser = {} as UserType} = useGetUser(params.userUuid)

	const messagesEndRef = useRef<HTMLDivElement>(null);
	const messageDataCount = MessagesData ? MessagesData.length : 0

	useEffect(() => {
		ScrollEndMessageBox(messagesEndRef);
	}, [MessagesData]);

	return (
		<MainLayout>
			<MessageBoxWrapper>
				<MessageContainer>
					<MessageHeader name={PartnerUser?.organizationName}/>
					<MessageViewer>
						{MessagesData?.map((message: TalkRoomMessageType, index: number) => {
							const layout = params.userUuid === message.senderUuid ? 'receiver' : 'sender';
							const ref = index === messageDataCount - 1 ? messagesEndRef : null
							return (
								<MessageBlock imgPath={createImageUrl(message.sender.imgPath)} name={message.sender.organizationName} text={message.message} layout={layout} ref={ref} key={message.id}/>
							)
						})}
					</MessageViewer>
					<MessageForm/>
				</MessageContainer>
			</MessageBoxWrapper>
		</MainLayout>
	);
};

export default MessageShowPage;
