import React from 'react';
import { HistoryData } from '@/ts/_dummyData/HistoryData';
import {PageTitle} from "@/ts/components/ui/title";
import {MainAppLayout} from "@/ts/components/ui/layout";
import {List} from "@/ts/components/pages/mainApp/MyPage/TradeHistory/features";

const MyPageTradeHistory = () => {
	return (
		<MainAppLayout>
			<PageTitle en={'trade history'} jp={'交換履歴'}/>
			{HistoryData.map((data, index)=>(
				<List data={data} key={index}/>
			))}
		</MainAppLayout>
	);
};

export default MyPageTradeHistory;
