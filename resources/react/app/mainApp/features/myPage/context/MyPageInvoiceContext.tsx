import React from 'react';
import {InvoiceData} from "@mainFeatures/myPage/components";
import InvoiceSearch from "@mainFeatures/myPage/components/InvoiceSearch/InvoiceSearch";
import InvoiceDescription from "@mainFeatures/myPage/components/InvoiceData/InvoiceDescription";
import InvoiceDownload from "@mainFeatures/myPage/components/InvoiceData/InvoiceDownload";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import { useRecoilValue } from 'recoil';
import {InvoiceMonthStates } from '../states/InvoiceMonthStates';
import { useGetInvoice } from '@/react/api/query/InvoiceQuery';

const MyPageInvoiceContext = () => {
	const invoiceMonth = useRecoilValue(InvoiceMonthStates);
	const {data: invoiceData, isLoading, isSuccess} = useGetInvoice(invoiceMonth);

	return (
		<>
			<InvoiceSearch/>

			{isLoading && (
				<ContentsLoader/>
			)}
			{isSuccess && (
				<>
					<InvoiceData invoiceData={invoiceData}/>
					<InvoiceDescription invoiceDataDetail={invoiceData.detail}/>
					{/*<InvoiceDownload/>*/}
				</>
			)}
		</>
	);
};

export default MyPageInvoiceContext;
