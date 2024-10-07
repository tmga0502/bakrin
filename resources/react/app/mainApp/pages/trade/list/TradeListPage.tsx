import React from "react";
import {useGetTrades} from "@/react/api/query/TradeQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import TradeList from "@/react/app/mainApp/features/trade/trade-list";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";

const TradeListPage = () => {
	const {data: tradeData} = useGetTrades()

	return (
	  <MainLayout>
		  {tradeData !== undefined ? (
			  <TradeList data={tradeData}/>
		  ):(
			  <CanNotGetData/>
		  )}
	  </MainLayout>
	);
};

export default TradeListPage;
