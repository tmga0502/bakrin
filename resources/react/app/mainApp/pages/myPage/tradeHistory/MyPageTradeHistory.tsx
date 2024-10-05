import React from 'react';
import { HistoryData } from '@/react/app/mainApp/_dummyData/HistoryData';
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import {AccordionList} from "@/react/app/mainApp/features/myPageHistory/components";
import ContainerSm from "@/react/app/mainApp/components/layout/container/ContainerSm/ContainerSm";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";

const MyPageTradeHistory = () => {
	return (
		<MainLayout>
			<PageTitle en={'trade history'} jp={'交換履歴'}/>
			<ContainerSm>
				{HistoryData.map((data, index)=>(
					<AccordionList historyData={data} key={index}/>
				))}
			</ContainerSm>
		</MainLayout>
	);
};

export default MyPageTradeHistory;
