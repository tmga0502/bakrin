import React from 'react';
import {ArrowStyle, ImageBoxWrapper} from './TradeImageBox.styles';
import {LuArrowRightLeft} from "react-icons/lu";
import ImageBox from "@mainFeatures/trade/components/ImageBox/ImageBox";
import {tradeRequestType} from "@mainFeatures/trade/types";
import {useRecoilValue} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";
import {createImageUrl} from "@/react/app/mainApp/functions/formatter";

const TradeImageBox: React.FC<tradeRequestType> = ({tradeRequestData}) => {
	const authProducer = useRecoilValue(IsAuthProducerDataStates)
	const senderProducer = tradeRequestData.trade_producers.filter(producer=>producer.producer.uuid !== authProducer.uuid)[0]
	const recipientProducer = tradeRequestData.trade_producers.filter(producer=>producer.producer.uuid === authProducer.uuid)[0]

	return (
		<div css={ImageBoxWrapper}>
			<ImageBox
				imgSrc={createImageUrl(senderProducer.item.thumbnail)}
				name={senderProducer.item.name}
				planName={senderProducer.item.plan.name}
				shippingTime={`${String(senderProducer.item.shippingStart)}月${senderProducer.item.shippingStartPart}`}
				user={true}/>
			<LuArrowRightLeft css={ArrowStyle}/>
			<ImageBox
				imgSrc={createImageUrl(recipientProducer.item.thumbnail)}
				name={recipientProducer.item.name}
				planName={recipientProducer.item.plan.name}
				shippingTime={`${String(recipientProducer.item.shippingStart)}月${recipientProducer.item.shippingStartPart}`}
				user={false}/>
		</div>
	);
};

export default TradeImageBox;
