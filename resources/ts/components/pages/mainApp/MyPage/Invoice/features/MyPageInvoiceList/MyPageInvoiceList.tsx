import React, {FC} from 'react';
import {MdFileDownload} from "react-icons/md";
import { MayPageInvoiceListType } from './MyPageInvoiceList.type';

const MyPageInvoiceList: FC<MayPageInvoiceListType> = ({date}) => {
	return (
		<div className="w-full border rounded-md bg-white p-4 flex justify-between items-center mb-2 shadow-md hover:opacity-80 hover:cursor-pointer">
			<p className="m-0">{date}</p>
			<MdFileDownload className="text-xl"/>
		</div>
	)
};

export default MyPageInvoiceList;
