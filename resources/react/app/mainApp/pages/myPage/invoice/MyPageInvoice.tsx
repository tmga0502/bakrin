import React from 'react';
import {DateObject} from "@/react/app/mainApp/_dummyData/InvoiceData";
import {PageTitle} from "@/react/app/mainApp/components/title";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import {InvoiceList} from "@/react/app/mainApp/features/myPageInvoice/components";
import ContainerSm from "@/react/app/mainApp/components/layout/container/ContainerSm/ContainerSm";

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
