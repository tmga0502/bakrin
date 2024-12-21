import React from 'react';
import {PageTitle} from "@mainElements/title";
import {Chat, TradeImageBox} from "@mainFeatures/trade/components";
import {tradeRequestType} from "@mainFeatures/trade/types";
import ContainerMd from "@mainLayouts/container/ContainerMd/ContainerMd";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import ShippingInfoSelectModal from "@mainFeatures/trade/components/ShippingInfoSelectModal/ShippingInfoSelectModal";
import {createPhoneNumber, createPostalCode} from "@/react/app/adminApp/functions/formatter";
import ShippingCompleteModal from "@mainFeatures/trade/components/shippingCompleteModal/ShippingCompleteModal";
import ReceiptCheckModal from "@mainFeatures/trade/components/receiptCheckModal/ReceiptCheckModal";
import {createImageUrl} from "@/react/app/mainApp/functions/formatter";

const TradeShowContents: React.FC<tradeRequestType> = ({tradeRequestData}) => {
	const authUser = useRecoilValue(IsAuthUserDataStates)
	const partnerData = tradeRequestData.trade_members.filter(user=>user.user.id !== authUser.id)[0]//相手
	const myData = tradeRequestData.trade_members.filter(user=>user.user.id === authUser.id)[0]//自分
	console.log(partnerData)
	return (
		<>
			<PageTitle en={'TRADE'} jp={'取引詳細'}/>
			<ContainerMd>
				<TradeImageBox tradeRequestData={tradeRequestData}/>

				<div className={'py-2 mb-2 border-b border-b-bakGray'}>
					<p className={'font-bold'}>【相手の送り先】</p>
					{partnerData.shipping_info_id === null ? (
						<p className={'leading-6'}>まだ指定されていません</p>
					):(
						<div className={'flex items-center justify-between gap-4 px-4'}>
							<div>
								<p className={'leading-6'}>{createPostalCode(partnerData.shipping_info.postal_code)}</p>
								<p className={'leading-6'}>{partnerData.shipping_info.address1}{partnerData.shipping_info.address2}{partnerData.shipping_info.address3}</p>
								<p className={'leading-6'}>{partnerData.shipping_info.address4}</p>
								<p className={'leading-8'}>{partnerData.shipping_info.name}</p>
								<p className={'leading-8'}>{createPhoneNumber(partnerData.shipping_info.phone_number)}</p>
							</div>
							<div>
								{partnerData.shipping_slip_path !== null && (
									<div className={'max-w-24'}>
										<img src={createImageUrl(partnerData.shipping_slip_path)} alt={'shipping_slip'} />
									</div>
								)}
							</div>
						</div>
					)}
				</div>

				{myData.shipping_info_id !== null && (
					<div className={'py-2'}>
						<p className={'mb-1 font-bold'}>【自分の送り先】</p>
						<div className={'flex items-center justify-between gap-4 px-4'}>
							<div>
								<p className={'leading-6'}>{createPostalCode(myData.shipping_info.postal_code)}</p>
								<p className={'leading-6'}>{myData.shipping_info.address1}{myData.shipping_info.address2}{myData.shipping_info.address3}</p>
								<p className={'leading-6'}>{myData.shipping_info.address4}</p>
								<p className={'leading-8'}>{myData.shipping_info.name}</p>
								<p className={'leading-8'}>{createPhoneNumber(myData.shipping_info.phone_number)}</p>
							</div>
							<div>
								{myData.shipping_slip_path !== '' && (
									<div className={'max-w-24'}>
										<img src={createImageUrl(myData.shipping_slip_path)} alt={'shipping_slip'}/>
									</div>
								)}
							</div>
						</div>
					</div>
				)}

				<div className={'flex items-center justify-around gap-24'}>
					<ShippingCompleteModal partnerData={partnerData} myData={myData}/>
					<ReceiptCheckModal myData={myData}/>
				</div>

				{(tradeRequestData.status === 1 || tradeRequestData.status === 2) && (
					<Chat tradeRequestData={tradeRequestData}/>
				)}
			</ContainerMd>

			{myData.shipping_info_id === null && (
				<ShippingInfoSelectModal myData={myData}/>
			)}
		</>
	);
};

export default TradeShowContents;
