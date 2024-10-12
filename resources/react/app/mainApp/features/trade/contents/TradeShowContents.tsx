import React from 'react';
import {PageTitle} from "@mainElements/title";
import {Chat, TradeImageBox} from "@mainFeatures/trade/components";
import {ShowButtonBoxStyle} from "@mainFeatures/trade/styles";
import {tradeRequestType} from "@mainFeatures/trade/types";

const TradeShowContents: React.FC<tradeRequestType> = ({tradeRequestData}) => {
	return (
		<>
			<PageTitle en={'TRADE'} jp={'取引詳細'}/>
			<TradeImageBox tradeRequestData={tradeRequestData}/>
			<div css={ShowButtonBoxStyle}>
				<Chat/>
			</div>
		</>
	);
};

export default TradeShowContents;
