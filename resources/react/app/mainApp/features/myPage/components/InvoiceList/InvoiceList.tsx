import React from 'react';
import {MdFileDownload} from "react-icons/md";
import {CardContainer, CardIcon, CardText} from "@mainFeatures/myPage/styles";
import {CardTitleType} from "@mainFeatures/myPage/types";

const InvoiceList: React.FC<CardTitleType> = ({title}) => {
	return (
		<div css={CardContainer}>
			<p css={CardText}>{title}</p>
			<MdFileDownload css={CardIcon}/>
		</div>
	);
};

export default InvoiceList;
