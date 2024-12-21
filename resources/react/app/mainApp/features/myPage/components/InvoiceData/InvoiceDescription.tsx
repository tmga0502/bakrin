import React from 'react';
import {withComma} from "@/react/app/mainApp/functions/formatter";

const InvoiceDescription: React.FC<{invoiceDataDetail: any}> = ({invoiceDataDetail}) => {
	return (
		<div className={'p-2'}>
			<p className={'text-lg mb-2'}>
				内訳
				<span className={'ml-2 text-xs'}>※金額は全て税抜き</span>
			</p>
			<table className={'w-full'}>
				<thead>
				<tr>
					<th className={'bg-bakDark text-white px-2 py-1 text-left'}>内容</th>
					<th className={'bg-bakDark text-white px-2 py-1 text-right'}>単価</th>
					<th className={'bg-bakDark text-white px-2 py-1 text-right'}>割引</th>
					<th className={'bg-bakDark text-white px-2 py-1 text-right'}>金額</th>
					<th className={'bg-bakDark text-white px-2 py-1 text-left'}>適用</th>
				</tr>
				</thead>
				<tbody>
				{invoiceDataDetail.map((data: any, index: number) => (
					<tr key={index}>
						<td className={'px-2 py-1 text-left'}>{data.trade_partner_name}</td>
						<td className={'px-2 py-1 text-right'}>{withComma(data.trade_amount)}円</td>
						<td className={'px-2 py-1 text-right'}>{withComma(data.discount_amount)}円</td>
						<td className={'px-2 py-1 text-right'}>{withComma(data.amount)}円</td>
						<td className={'px-2 py-1 text-left'}>{data.discount_reason}</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
};

export default InvoiceDescription;
