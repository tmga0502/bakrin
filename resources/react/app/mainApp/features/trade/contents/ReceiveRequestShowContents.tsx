import React from 'react';
import {PageTitle} from "@mainElements/title";
import ContainerMd from "@mainLayouts/container/ContainerMd/ContainerMd";
import {PermissionButton, RejectButton, TradeImageBox} from "@mainFeatures/trade/components";
import {tradeRequestType} from "@mainFeatures/trade/types";

const ReceiveRequestShowContents: React.FC<tradeRequestType> = ({tradeRequestData}) => {
	return (
		<>
			<PageTitle en={'RECEIVE REQUEST'} jp={'申請確認'}/>
			<p className={'text-center mb-6'}>以下の交換申請が届いています</p>
			<ContainerMd>
				<TradeImageBox tradeRequestData={tradeRequestData}/>
				<div className={'flex items-center gap-12 justify-center max-w-[80%] mx-auto'}>
					<PermissionButton tradeId={tradeRequestData.id}/>
					<RejectButton tradeId={tradeRequestData.id}/>
				</div>
			</ContainerMd>
		</>
	);
};

export default ReceiveRequestShowContents;
