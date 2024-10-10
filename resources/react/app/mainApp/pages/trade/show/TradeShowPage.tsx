import React from "react";
import {useParams} from "react-router-dom";
import {useGetTrade} from "@/react/api/query/TradeQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import {ShowButtonBoxStyle} from "@mainFeatures/trade/styles";
import {Chat, TradeImageBox} from "@mainFeatures/trade/components";

const TradeShowPage = () => {
	const params = useParams()
	const {data: tradeData} = useGetTrade(params.tradeUuid as string)

	return (
	  <MainLayout>
		  <PageTitle en={'TRADE'} jp={'取引詳細'}/>
		  <TradeImageBox tradeRequestData={tradeData}/>
		  <div css={ShowButtonBoxStyle}>
			  <Chat/>
		  </div>
	  </MainLayout>
	);
};

export default TradeShowPage;
