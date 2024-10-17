import React, {ReactNode} from 'react';
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {useGetCompletedTrades} from "@/react/api/query/TradeQuery";
import TradeHistoryContents from "@mainFeatures/myPage/contents/TradeHistoryContents";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";

const MyPageTradeHistoryPage = () => {
	const {data, isLoading} = useGetCompletedTrades()

	let contents: ReactNode
	if (isLoading){
		contents = <ContentsLoader/>
	}else if(!data){
		contents = <CanNotGetData/>
	}else{
		contents = <TradeHistoryContents tradeList={data}/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default MyPageTradeHistoryPage;
