import React, {ReactNode} from "react";
import {useParams} from "react-router-dom";
import {useGetTrade} from "@/react/api/query/TradeQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";
import ReceiveRequestShowContents from "@mainFeatures/trade/contents/ReceiveRequestShowContents";


const ReceiveApplicationShowPage = () => {
	const params = useParams()
	const {data: tradeRequestData, isLoading} = useGetTrade(params.tradeUuid as string)

	let contents: ReactNode
	if (isLoading){
		contents = <ContentsLoader/>
	}else if (!tradeRequestData){
		contents = <CanNotGetData/>
	}else{
		contents = <ReceiveRequestShowContents tradeRequestData={tradeRequestData}/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default ReceiveApplicationShowPage;
