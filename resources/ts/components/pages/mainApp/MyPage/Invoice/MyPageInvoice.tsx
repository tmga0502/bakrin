import React from 'react';
import {DateObject} from "@/ts/_dummyData/InvoiceData";
import {PageTitle} from "@/ts/components/ui/title/Title";
import MyPageInvoiceList from "@/ts/components/pages/mainApp/MyPage/Invoice/features/MyPageInvoice.list";
import {MainAppLayout} from "@/ts/components/ui/layout";

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
