import React from 'react';
import { HistoryData } from '@/ts/_dummyData/HistoryData';
import {PageTitle} from "@/ts/components/ui/title/Title";
import MyPageTradeHistoryList from "@/ts/components/pages/mainApp/MyPage/TradeHistory/features/MyPageTradeHistory.list";
import {MainAppLayout} from "@/ts/components/ui/layout";

const MyPageTradeHistory = () => {
	return (
		<MainAppLayout>
			<PageTitle en={'trade history'} jp={'交換履歴'}/>
			{HistoryData.map((data, index)=>(
				<MyPageTradeHistoryList data={data} key={index}/>
			))}
		</MainAppLayout>
	);
};

export default MyPageTradeHistory;
