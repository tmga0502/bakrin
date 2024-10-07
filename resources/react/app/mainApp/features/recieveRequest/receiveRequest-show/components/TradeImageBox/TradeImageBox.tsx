import React from 'react';
import {ArrowStyle, ImageBoxWrapper, Title} from './TradeImageBox.styles';
import {LuArrowRightLeft} from "react-icons/lu";
import ImageBox from "@/react/app/mainApp/features/recieveRequest/receiveRequest-show/components/ImageBox/ImageBox";
import {receiveRequestType} from "@/react/app/mainApp/features/recieveRequest/receiveRequest-show/types/type";

const TradeImageBox: React.FC<receiveRequestType> = ({tradeRequestData}) => {
	const senderProducer = tradeRequestData.trade_producers.filter(producer=>producer.type === 'sender')[0]
	const recipientProducer = tradeRequestData.trade_producers.filter(producer=>producer.type === 'recipient')[0]

	return (
		<>
			<p css={Title}>以下の交換申請が届いています</p>

			<div css={ImageBoxWrapper}>
				<ImageBox imgSrc={senderProducer.item.thumbnail} name={senderProducer.item.name} planName={senderProducer.item.plan.name}
						  shippingTime={`${String(senderProducer.item.shippingStart)}月${senderProducer.item.shippingStartPart}`} user={true}/>
				<LuArrowRightLeft css={ArrowStyle}/>
				<ImageBox imgSrc={recipientProducer.item.thumbnail} name={recipientProducer.item.name} planName={recipientProducer.item.plan.name}
						  shippingTime={`${String(recipientProducer.item.shippingStart)}月${recipientProducer.item.shippingStartPart}`} user={false}/>
			</div>
		</>
	);
};

export default TradeImageBox;
