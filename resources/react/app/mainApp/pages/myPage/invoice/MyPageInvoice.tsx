import React from 'react';
import {DateObject} from "@/react/app/mainApp/_dummyData/InvoiceData";
import {PageTitle} from "@/react/app/mainApp/components/title";
import {MyPageInvoiceList} from "@/react/app/mainApp/pages/myPage/invoice/features";
import {MainAppLayout} from "@/react/app/mainApp/features/layout";

const MyPageInvoice = () => {
	return (
		<MainAppLayout>
			<PageTitle en={'Invoice'} jp={'請求書一覧'}/>
			<div className="max-w-[500px] mx-auto">
				{DateObject.map((date: string, index: number) => (
					<MyPageInvoiceList date={date} key={index}/>
				))}
			</div>
		</MainAppLayout>
	);
};

export default MyPageInvoice;
