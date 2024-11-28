import React from 'react';
import {MdFileDownload} from "react-icons/md";
import {CardTitleType} from "@mainFeatures/myPage/types";
import MyPageCardContainer from '../Card/MyPageCardContainer';
import MyPageCardText from "@mainFeatures/myPage/components/Card/MyPageCardText";

const InvoiceList: React.FC<CardTitleType> = ({title}) => {
	return (
		<MyPageCardContainer>
			<MyPageCardText title={title}/>
			<MdFileDownload className={'text-xl'}/>
		</MyPageCardContainer>
	);
};

export default InvoiceList;
