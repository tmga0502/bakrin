import React, {useRef} from 'react';
import {MessageBlock, MessageBoxWrapper, MessageContainer, MessageHeader, MessageViewer, TradeMessageForm} from "@mainFeatures/message/components";
import {tradeRequestType} from "@mainFeatures/trade/types";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import {createImageUrl} from "@/react/app/mainApp/functions/formatter";

const Chat: React.FC<tradeRequestType> = ({tradeRequestData}) => {
	const authUser = useRecoilValue(IsAuthUserDataStates)
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const messageDataCount = tradeRequestData.messages ? tradeRequestData.messages.length : 0
	const partnerUser = tradeRequestData.trade_members.filter(user => user.id !== authUser.id)[0]
	return (
		<MessageBoxWrapper>
			<MessageContainer>
				<MessageHeader name={partnerUser.user.organization_name}/>
				<MessageViewer>
					<></>
					{tradeRequestData.messages?.map((message, index: number) => {
						const layout = authUser.id === message.user_id ? 'sender' : 'receiver';
						const ref = index === messageDataCount - 1 ? messagesEndRef : null
						return (
							<MessageBlock imgPath={createImageUrl(message.sender.thumbnail_path)} name={message.sender.organization_name} text={message.message} layout={layout} ref={ref} key={message.id}/>
						)
					})}
				</MessageViewer>
				<TradeMessageForm tradeId={tradeRequestData.id}/>
			</MessageContainer>
		</MessageBoxWrapper>
	);
};

export default Chat;
