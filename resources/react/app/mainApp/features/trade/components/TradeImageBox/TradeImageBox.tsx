import React from 'react';
import {ArrowStyle, ImageBoxWrapper} from './TradeImageBox.styles';
import {LuArrowRightLeft} from "react-icons/lu";
import ImageBox from "@mainFeatures/trade/components/ImageBox/ImageBox";
import {tradeRequestType} from "@mainFeatures/trade/types";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import {createImageUrl} from "@/react/app/mainApp/functions/formatter";

const TradeImageBox: React.FC<tradeRequestType> = ({tradeRequestData}) => {
	const authUser = useRecoilValue(IsAuthUserDataStates)
	const senderUser = tradeRequestData.trade_producers.filter(producer=>producer.producer.uuid !== authUser.uuid)[0]
	const recipientUser = tradeRequestData.trade_producers.filter(producer=>producer.producer.uuid === authUser.uuid)[0]

	return (
		<div css={ImageBoxWrapper}>
			<ImageBox
				imgSrc={createImageUrl(senderUser.item.thumbnail)}
				name={senderUser.item.name}
				planName={senderUser.item.plan.name}
				shippingTime={`${String(senderUser.item.shippingStart)}月${senderUser.item.shippingStartPart}`}
				user={true}/>
			<LuArrowRightLeft css={ArrowStyle}/>
			<ImageBox
				imgSrc={createImageUrl(recipientUser.item.thumbnail)}
				name={recipientUser.item.name}
				planName={recipientUser.item.plan.name}
				shippingTime={`${String(recipientUser.item.shippingStart)}月${recipientUser.item.shippingStartPart}`}
				user={false}/>
		</div>
	);
};

export default TradeImageBox;
