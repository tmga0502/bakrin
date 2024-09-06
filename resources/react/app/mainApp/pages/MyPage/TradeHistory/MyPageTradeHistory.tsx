import React from 'react';
import { HistoryData } from '@/react/app/mainApp/_dummyData/HistoryData';
import {PageTitle} from "@/react/app/mainApp/components/title";
import {MainAppLayout} from "@/react/app/mainApp/components/layout";
import {List} from "@/react/app/mainApp/pages/MyPage/TradeHistory/features";

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
