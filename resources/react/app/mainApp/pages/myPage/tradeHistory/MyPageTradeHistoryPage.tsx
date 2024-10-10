import React from 'react';
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import {HistoryData} from "@/react/app/mainApp/_dummyData/HistoryData";
import {AccordionList} from "@mainFeatures/myPage/components";

const MyPageTradeHistoryPage = () => {
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

export default MyPageTradeHistoryPage;
