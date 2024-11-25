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
	const partnerUser = tradeRequestData.trade_producers.filter(producer => producer.producerUuid !== authUser.uuid)[0]
	console.log(tradeRequestData.messages)
	return (
		<MessageBoxWrapper>
			<MessageContainer>
				<MessageHeader name={partnerUser.producer.organizationName}/>
				<MessageViewer>
					<></>
					{tradeRequestData.messages?.map((message, index: number) => {
						const layout = authUser.uuid === message.senderUuid ? 'sender' : 'receiver';
						const ref = index === messageDataCount - 1 ? messagesEndRef : null
						return (
							<MessageBlock imgPath={createImageUrl(message.sender.imgPath)} name={message.sender.organizationName} text={message.message} layout={layout} ref={ref} key={message.id}/>
						)
					})}
				</MessageViewer>
				<TradeMessageForm tradeId={tradeRequestData.id}/>
			</MessageContainer>
		</MessageBoxWrapper>
	);
};

export default Chat;
