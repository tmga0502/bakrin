import React from 'react';
import {PageTitle} from "@mainElements/title";
import {ShowButtonBoxStyle, ShowTitle} from "@mainFeatures/trade/styles";
import ContainerMd from "@mainLayouts/container/ContainerMd/ContainerMd";
import {PermissionButton, RejectButton, TradeImageBox} from "@mainFeatures/trade/components";
import {tradeRequestType} from "@mainFeatures/trade/types";

const ReceiveRequestShowContents: React.FC<tradeRequestType> = ({tradeRequestData}) => {
	return (
		<>
			<PageTitle en={'RECEIVE REQUEST'} jp={'申請確認'}/>
			<p css={ShowTitle}>以下の交換申請が届いています</p>
			<ContainerMd>
				<TradeImageBox tradeRequestData={tradeRequestData}/>
				<div css={ShowButtonBoxStyle}>
					<PermissionButton tradeId={tradeRequestData.id}/>
					<RejectButton/>
				</div>
			</ContainerMd>
		</>
	);
};

export default ReceiveRequestShowContents;
