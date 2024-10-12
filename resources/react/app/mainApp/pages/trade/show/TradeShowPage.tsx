import React, {ReactNode} from "react";
import {useParams} from "react-router-dom";
import {useGetTrade} from "@/react/api/query/TradeQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";
import TradeShowContents from "@mainFeatures/trade/contents/TradeShowContents";

const TradeShowPage = () => {
	const params = useParams()
	const {data: tradeData, isLoading} = useGetTrade(params.tradeUuid as string)

	let contents: ReactNode
	if(isLoading){
		contents = <ContentsLoader/>
	}else if (!tradeData){
		contents = <CanNotGetData/>
	}else{
		contents = 	<TradeShowContents tradeRequestData={tradeData}/>
	}

	return (
	  <MainLayout>
		  {contents}
	  </MainLayout>
	);
};

export default TradeShowPage;
