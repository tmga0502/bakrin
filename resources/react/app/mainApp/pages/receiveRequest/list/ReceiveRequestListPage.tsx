import {useGetTradeRequests} from "@/react/api/query/TradeQuery";
import React from "react";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import ReceiveRequestList from "../../../features/recieveRequest/receiveRequest-list";

const ReceiveRequestListPage = () => {
	const {data: tradeRequestsData} = useGetTradeRequests();

	return (
	  <MainLayout>
		  {tradeRequestsData !== undefined ? (
			  <ReceiveRequestList data={tradeRequestsData}/>
		  ):(
			  <CanNotGetData/>
		  )}

	  </MainLayout>
	);
};

export default ReceiveRequestListPage;
