import React, {useEffect, useRef} from 'react';
import {MessageBlock, MessageBoxWrapper, MessageContainer, MessageForm, MessageHeader, MessageViewer} from "@mainFeatures/message/components";
import {TalkRoomMessageType} from "@/react/types/TalkRoomMessageType";
import {createImageUrl} from "@/react/app/mainApp/functions/formatter";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import {ScrollEndMessageBox} from "@mainFeatures/message/functions/ScrollEnd";
import { TalkRoomType } from '@/react/types/TalkRoomType';

const MessageShowContext: React.FC<{talkRoomData: TalkRoomType}> = ({talkRoomData}) => {
	const authUser = useRecoilValue(IsAuthUserDataStates)

	const partner = talkRoomData.members.find(member => member.id !== authUser.id)
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const messageDataCount = talkRoomData ? talkRoomData.length : 0

	useEffect(() => {
		ScrollEndMessageBox(messagesEndRef);
	}, [talkRoomData]);

	return (
		<MessageBoxWrapper>
			<MessageContainer>
				<MessageHeader name={partner?.user.organization_name as string}/>
				<MessageViewer>
					{talkRoomData.messages?.map((message: TalkRoomMessageType, index: number) => {
						console.log(message)
						const layout = message.user_id === authUser.id ? 'sender' : 'receiver';
						const ref = index === messageDataCount - 1 ? messagesEndRef : null
						return (
							<MessageBlock imgPath={createImageUrl(message.user.thumbnail_path)} name={message.user.organization_name} text={message.message} layout={layout} ref={ref} key={message.id}/>
						)
					})}
				</MessageViewer>
				<MessageForm/>
			</MessageContainer>
		</MessageBoxWrapper>
	);
};

export default MessageShowContext;
