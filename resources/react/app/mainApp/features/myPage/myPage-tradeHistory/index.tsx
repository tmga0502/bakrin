import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import ContainerSm from "@/react/app/mainApp/components/layout/container/ContainerSm/ContainerSm";
import {HistoryData} from "@/react/app/mainApp/_dummyData/HistoryData";
import {AccordionList} from "@/react/app/mainApp/features/myPage/myPage-tradeHistory/components";

const Index = () => {
	return (
		<>
			<PageTitle en={'trade history'} jp={'交換履歴'}/>
			<ContainerSm>
				{HistoryData.map((data, index)=>(
					<AccordionList historyData={data} key={index}/>
				))}
			</ContainerSm>
		</>
	);
};

export default Index;
