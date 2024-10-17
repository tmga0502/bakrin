import React from 'react';
import {PageTitle} from "@mainElements/title";
import {Chat, TradeImageBox} from "@mainFeatures/trade/components";
import {ShowButtonBoxStyle} from "@mainFeatures/trade/styles";
import {tradeRequestType} from "@mainFeatures/trade/types";
import ContainerMd from "@mainLayouts/container/ContainerMd/ContainerMd";

const TradeShowContents: React.FC<tradeRequestType> = ({tradeRequestData}) => {
	return (
		<>
			<PageTitle en={'TRADE'} jp={'取引詳細'}/>
			<ContainerMd>
				<TradeImageBox tradeRequestData={tradeRequestData}/>
				<div css={ShowButtonBoxStyle}>
					<Chat/>
				</div>
			</ContainerMd>
		</>
	);
};

export default TradeShowContents;