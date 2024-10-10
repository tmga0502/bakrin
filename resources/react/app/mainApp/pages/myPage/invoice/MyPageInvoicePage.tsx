import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {DateObject} from "@/react/app/mainApp/_dummyData/InvoiceData";
import {PageTitle} from "@mainElements/title";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import {InvoiceList} from "@mainFeatures/myPage/components";

const MyPageInvoicePage = () => {
	return (
		<MainLayout>
			<PageTitle en={'Invoice'} jp={'請求書一覧'}/>
			<ContainerSm>
				{DateObject.map((date: string, index: number) => (
					<InvoiceList title={date} key={index}/>
				))}
			</ContainerSm>
		</MainLayout>
	);
};

export default MyPageInvoicePage;
