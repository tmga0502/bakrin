import React from 'react';
import {PageTitle} from "@mainElements/title";
import {Chat, TradeImageBox} from "@mainFeatures/trade/components";
import {tradeRequestType} from "@mainFeatures/trade/types";
import ContainerMd from "@mainLayouts/container/ContainerMd/ContainerMd";

const TradeShowContents: React.FC<tradeRequestType> = ({tradeRequestData}) => {
	console.log(tradeRequestData)
	return (
		<>
			<PageTitle en={'TRADE'} jp={'取引詳細'}/>
			<ContainerMd>
				<TradeImageBox tradeRequestData={tradeRequestData}/>

				{(tradeRequestData.status === 1 || tradeRequestData.status === 2) && (
					<Chat tradeRequestData={tradeRequestData}/>
				)}
			</ContainerMd>
		</>
	);
};

export default TradeShowContents;
