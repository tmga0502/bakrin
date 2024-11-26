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
	const senderUser = tradeRequestData.trade_members.filter(user=>user.user.id !== authUser.id)[0]
	const recipientUser = tradeRequestData.trade_members.filter(user=>user.user.id === authUser.id)[0]

	return (
		<div css={ImageBoxWrapper}>
			<ImageBox
				imgSrc={createImageUrl(senderUser.item.thumbnail_path)}
				name={senderUser.item.name}
				planName={senderUser.item.plan.name}
				shippingTime={`${String(senderUser.item.shipping_start)}月${senderUser.item.shipping_start_part}`}
				user={true}/>
			<LuArrowRightLeft css={ArrowStyle}/>
			<ImageBox
				imgSrc={createImageUrl(recipientUser.item.thumbnail_path)}
				name={recipientUser.item.name}
				planName={recipientUser.item.plan.name}
				shippingTime={`${String(recipientUser.item.shipping_start)}月${recipientUser.item.shipping_start_part}`}
				user={false}/>
		</div>
	);
};

export default TradeImageBox;
