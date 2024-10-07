import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import ContainerSm from "@/react/app/mainApp/components/layout/container/ContainerSm/ContainerSm";
import {DateObject} from "@/react/app/mainApp/_dummyData/InvoiceData";
import {InvoiceList} from "@/react/app/mainApp/features/myPage/myPage-invoice/components";

const Index = () => {
	return (
		<>
			<PageTitle en={'Invoice'} jp={'請求書一覧'}/>
			<ContainerSm>
				{DateObject.map((date: string, index: number) => (
					<InvoiceList date={date} key={index}/>
				))}
			</ContainerSm>
		</>
	);
};

export default Index;
