import React from 'react';
import {DateObject} from "@/react/app/mainApp/_dummyData/InvoiceData";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import {InvoiceList} from "@/react/app/mainApp/features/myPageInvoice/components";
import ContainerSm from "@/react/app/mainApp/components/layout/container/ContainerSm/ContainerSm";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";

const MyPageInvoice = () => {
	return (
		<MainLayout>
			<PageTitle en={'Invoice'} jp={'請求書一覧'}/>
			<ContainerSm>
				{DateObject.map((date: string, index: number) => (
					<InvoiceList date={date} key={index}/>
				))}
			</ContainerSm>
		</MainLayout>
	);
};

export default MyPageInvoice;
