import React from "react";
import {useParams} from "react-router-dom";
import {useGetTrade} from "@/react/api/query/TradeQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import ReceiveRequestShow from "@/react/app/mainApp/features/recieveRequest/receiveRequest-show";


const ReceiveApplicationShowPage = () => {
	const params = useParams()
	const {data: tradeRequestData} = useGetTrade(params.tradeUuid as string)

	return (
	  <MainLayout>
		  {tradeRequestData !== undefined ? (
			  <ReceiveRequestShow tradeRequestData={tradeRequestData}/>
		  ):(
			  <CanNotGetData/>
		  )}
	  </MainLayout>
	);
};

export default ReceiveApplicationShowPage;
