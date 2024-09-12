import React from 'react';
import {LuArrowRightLeft} from "react-icons/lu";
import ImageBox from "@/react/app/mainApp/features/item/TradeImageBox/ImageBox";
import {TradeType} from "@/react/types/TradeType";

type TradeImageBoxType ={
	data: TradeType
}

const TradeImageBox = ({data}: TradeImageBoxType) => {
	const senderProducer = data.trade_producers.filter(producer=>producer.type === 'sender')[0]
	const recipientProducer = data.trade_producers.filter(producer=>producer.type === 'recipient')[0]
	return (
		<div className="flex gap-6 justify-between items-center mb-16">
			<ImageBox imgSrc={senderProducer.item.thumbnail} name={senderProducer.item.name} planName={senderProducer.item.plan.name}
					 shippingTime={String(senderProducer.item.shippingStart)+senderProducer.item.shippingStartPart} user={true}/>
			<LuArrowRightLeft className="text-5xl"/>
			<ImageBox imgSrc={recipientProducer.item.thumbnail} name={recipientProducer.item.name} planName={recipientProducer.item.plan.name}
					  shippingTime={String(recipientProducer.item.shippingStart)+recipientProducer.item.shippingStartPart} user={false}/>
		</div>
	);
};

export default TradeImageBox;
