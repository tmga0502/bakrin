import React from "react";
import {useParams} from "react-router-dom";
import {useGetTrade} from "@/react/api/query/TradeQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import TradeShow from "@/react/app/mainApp/features/tradeShow";

const TradeShowPage = () => {
	const params = useParams()
	const {data: tradeData} = useGetTrade(params.tradeUuid as string)

	return (
	  <MainLayout>
		  {tradeData !== undefined ? (
			  <TradeShow data={tradeData}/>
		  ):(
			  <CanNotGetData/>
		  )}

	  </MainLayout>
	);
};

export default TradeShowPage;
