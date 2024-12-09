import React from 'react';
import {PageTitle} from "@mainElements/title";
import {Chat, TradeImageBox} from "@mainFeatures/trade/components";
import {tradeRequestType} from "@mainFeatures/trade/types";
import ContainerMd from "@mainLayouts/container/ContainerMd/ContainerMd";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import ShippingInfoSelectModal from "@mainFeatures/trade/components/ShippingInfoSelectModal/ShippingInfoSelectModal";
import {createPhoneNumber, createPostalCode} from "@/react/app/adminApp/functions/formatter";

const TradeShowContents: React.FC<tradeRequestType> = ({tradeRequestData}) => {
	const authUser = useRecoilValue(IsAuthUserDataStates)
	const senderUser = tradeRequestData.trade_members.filter(user=>user.user.id !== authUser.id)[0]//相手
	const recipientUser = tradeRequestData.trade_members.filter(user=>user.user.id === authUser.id)[0]//自分
	console.log(recipientUser)
	return (
		<>
			<PageTitle en={'TRADE'} jp={'取引詳細'}/>
			<ContainerMd>
				<TradeImageBox tradeRequestData={tradeRequestData}/>

				<div className={'py-2 mb-2 border-b border-b-bakGray'}>
					<p className={'font-bold'}>【相手の送り先】</p>
					{senderUser.shipping_info_id === null ? (
						<p className={'leading-6'}>まだ指定されていません</p>
					):(
						<>
							<p className={'leading-6'}>{createPostalCode(senderUser.shipping_info.postal_code)}</p>
							<p className={'leading-6'}>{senderUser.shipping_info.address1}{senderUser.shipping_info.address2}{senderUser.shipping_info.address3}</p>
							<p className={'leading-6'}>{senderUser.shipping_info.address4}</p>
							<p className={'leading-8'}>{senderUser.shipping_info.name}</p>
							<p className={'leading-8'}>{createPhoneNumber(senderUser.shipping_info.phone_number)}</p>
						</>
					)}
				</div>

				<div className={'py-2'}>
					<p className={'mb-1 font-bold'}>【自分の送り先】</p>
					<p className={'leading-6'}>{createPostalCode(recipientUser.shipping_info.postal_code)}</p>
					<p className={'leading-6'}>{recipientUser.shipping_info.address1}{recipientUser.shipping_info.address2}{recipientUser.shipping_info.address3}</p>
					<p className={'leading-6'}>{recipientUser.shipping_info.address4}</p>
					<p className={'leading-8'}>{recipientUser.shipping_info.name}</p>
					<p className={'leading-8'}>{createPhoneNumber(recipientUser.shipping_info.phone_number)}</p>
				</div>

				{(tradeRequestData.status === 1 || tradeRequestData.status === 2) && (
					<Chat tradeRequestData={tradeRequestData}/>
				)}
			</ContainerMd>

			{recipientUser.shipping_info_id === null && (
				<ShippingInfoSelectModal recipientUser={recipientUser}/>
			)}
		</>
	);
};

export default TradeShowContents;
