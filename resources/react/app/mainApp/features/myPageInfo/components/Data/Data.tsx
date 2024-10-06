import React from 'react';
import {DataType} from "./Data.type";
import {Wrapper, TextStyle} from './Data.styles';
import {createPhoneNumber, createPostalCode} from "@/react/app/mainApp/functions/formatter";
import DataItem from "@/react/app/mainApp/features/myPageInfo/components/DataItem/DataItem";

const Data: React.FC<DataType> = ({userData}) => {
	return (
		<div css={Wrapper}>
			<DataItem title={'法人名・団体名'} body={userData.organizationName}/>
			<DataItem title={'代表者名'} body={userData.presidentName}/>
			<DataItem title={'住所'} body={
				<>
					{createPostalCode(userData.postalCode)}<br/>
					{`${userData.address1}${userData.address2}${userData.address3}${userData.address4}`}
				</>
			}/>
			<DataItem title={'電話番号'} body={createPhoneNumber(userData.tel)}/>
			<DataItem title={'メールアドレス'} body={userData.email}/>

			<p css={TextStyle}>※上記情報に変更があった場合は、お問い合わせよりご連絡ください</p>
		</div>
	);
};

export default Data;
