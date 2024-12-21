import React from 'react';
import {InvoiceType} from "@/react/types/InvoiceType";
import {withComma} from "@/react/app/mainApp/functions/formatter";

const InvoiceData: React.FC<{invoiceData: InvoiceType}> = ({invoiceData}) => {
	return (

		<div className={'p-2 mb-12'}>
			<p className={'text-lg my-2'}>{invoiceData.display_month}</p>
			<table className={'w-full'}>
				<thead>
				<tr>
					<th className={'bg-bakDark text-white px-2 py-1 text-left'}>内容</th>
					<th className={'bg-bakDark text-white px-2 py-1 text-right'}>件数</th>
					<th className={'bg-bakDark text-white px-2 py-1 text-right'}>単価(税抜)</th>
					<th className={'bg-bakDark text-white px-2 py-1 text-right'}>金額(税抜)</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>総取引</td>
					<td className={'px-2 py-1 text-right'}>{withComma(invoiceData.all_trade_count)}件</td>
					<td className={'px-2 py-1 text-right'}>{withComma(invoiceData.trade_amount)}円</td>
					<td className={'px-2 py-1 text-right'}>{withComma(invoiceData.all_trade_amount)}円</td>
				</tr>
				<tr className={'border-b border-b-bakGray'}>
					<td>割引件数</td>
					<td className={'px-2 py-1 text-right'}>{withComma(invoiceData.discount_count)}件</td>
					<td className={'px-2 py-1 text-right'}>{withComma(invoiceData.discount_amount)}円</td>
					<td className={'px-2 py-1 text-right'}>{withComma(invoiceData.all_discount_amount)}円</td>
				</tr>
				<tr>
					<td colSpan={3} className={'px-2 py-1 text-right'}>小計</td>
					<td className={'px-2 py-1 text-right'}>{withComma(invoiceData.sub_total)}円</td>
				</tr>
				<tr>
					<td colSpan={3} className={'px-2 py-1 text-right'}>消費税</td>
					<td className={'px-2 py-1 text-right'}>{withComma(invoiceData.tax)}円</td>
				</tr>
				<tr>
					<td colSpan={3} className={'px-2 py-1 text-right'}>合計</td>
					<td className={'px-2 py-1 text-right'}>{withComma(invoiceData.total)}円</td>
				</tr>
				</tbody>
			</table>
		</div>
	);
};

export default InvoiceData;
