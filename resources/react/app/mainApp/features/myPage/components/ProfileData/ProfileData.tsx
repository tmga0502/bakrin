import React from 'react';
import {Wrapper, TextStyle, DataBody, DataBox, DataTitle} from './ProfileData.styles';
import {createPhoneNumber, createPostalCode} from "@/react/app/mainApp/functions/formatter";
import {useRecoilValue} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";

const ProfileData: React.FC = () => {
	const userData = useRecoilValue(IsAuthProducerDataStates);
	return (
		<div css={Wrapper}>
			<div css={DataBox}>
				<label css={DataTitle}>法人名・団体名</label>
				<p css={DataBody}>{userData.organizationName}</p>
			</div>

			<div css={DataBox}>
				<label css={DataTitle}>代表者名</label>
				<p css={DataBody}>{userData.presidentName}</p>
			</div>

			<div css={DataBox}>
				<label css={DataTitle}>住所</label>
				<p css={DataBody}>
					<>
						{createPostalCode(userData.postalCode)}<br/>
						{`${userData.address1}${userData.address2}${userData.address3}${userData.address4}`}
					</>
				</p>
			</div>

			<div css={DataBox}>
				<label css={DataTitle}>電話番号</label>
				<p css={DataBody}>{createPhoneNumber(userData.tel)}</p>
			</div>
			<div css={DataBox}>
				<label css={DataTitle}>メールアドレス</label>
				<p css={DataBody}>{userData.email}</p>
			</div>

			<p css={TextStyle}>※上記情報に変更があった場合は、お問い合わせよりご連絡ください</p>
		</div>
	);
};

export default ProfileData;
