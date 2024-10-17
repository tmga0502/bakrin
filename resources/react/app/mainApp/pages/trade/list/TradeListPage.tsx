import React, {ReactNode} from "react";
import {useGetOngoingTrades, useGetPendingTrades} from "@/react/api/query/TradeQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";
import TradeListContents from "@mainFeatures/trade/contents/TradeListContents";

const TradeListPage = () => {
	const {data: ongoingTradesData, isLoading: ongoingLoading} = useGetOngoingTrades()
	const {data: pendingTradesData, isLoading: pendingLoading} = useGetPendingTrades()

	let contents: ReactNode;
	if (ongoingLoading || pendingLoading){
		contents = <ContentsLoader/>
	}else if(!ongoingTradesData || !pendingTradesData){
		contents = <CanNotGetData/>
	}else{
		contents = <TradeListContents
			ongoingTradesData={ongoingTradesData}
			pendingTradesData={pendingTradesData}/>
	}

	return (
	  <MainLayout>
		  {contents}
	  </MainLayout>
	);
};

export default TradeListPage;
