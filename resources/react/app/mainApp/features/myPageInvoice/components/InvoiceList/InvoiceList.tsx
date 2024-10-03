import React from 'react';
import {InvoiceListType} from "./InvoiceList.type";
import {ListStyle} from './InvoiceList.css';
import {MdFileDownload} from "react-icons/md";

const InvoiceList: React.FC<InvoiceListType> = ({date}) => {
	return (
		<div className={ListStyle}>
			<p>{date}</p>
			<MdFileDownload size={'20px'}/>
		</div>
	);
};

export default InvoiceList;
