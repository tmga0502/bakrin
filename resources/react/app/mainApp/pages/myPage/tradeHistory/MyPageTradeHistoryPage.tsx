import React, {ReactNode} from 'react';
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {useGetCompletedTrades} from "@/react/api/query/TradeQuery";
import MyPageTradeHistoryContext from "@mainFeatures/myPage/context/MyPageTradeHistoryContext";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";

const MyPageTradeHistoryPage = () => {
	const {data, isLoading} = useGetCompletedTrades()

	let context: ReactNode
	if (isLoading){
		context = <ContentsLoader/>
	}else if(!data){
		context = <CanNotGetData/>
	}else{
		context = <MyPageTradeHistoryContext tradeList={data}/>
	}

	return (
		<MainLayout>
			{context}
		</MainLayout>
	);
};

export default MyPageTradeHistoryPage;
