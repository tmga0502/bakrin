import React, {ReactNode} from 'react';
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import MyPageInvoiceContext from "@mainFeatures/myPage/context/MyPageInvoiceContext";

const MyPageInvoicePage = () => {

	let context: ReactNode
	context = <MyPageInvoiceContext/>
	return (
		<MainLayout>
			<PageTitle en={'Invoice'} jp={'請求書'}/>
			<ContainerSm>
				{context}
			</ContainerSm>
		</MainLayout>
	);
};

export default MyPageInvoicePage;
