import React from 'react';
import {Wrapper, TextStyle, DataBody, DataBox, DataTitle, ImageBox, ImageStyle, Flex} from './ProfileData.styles';
import {createImageUrl, createPhoneNumber, createPostalCode} from "@/react/app/mainApp/functions/formatter";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import NoImage from '@/react/assets/images/noImage.png'
import ProfileImageEditModal from "@mainFeatures/myPage/components/ProfileImageEditModal/ProfileImageEditModal";
import {ChangePasswordModal} from "@mainFeatures/myPage/components";
import ChangePaymentMethodModal from "../ChangePaymentMethodModal/ChangePaymentMethodModal";

const ProfileData: React.FC = () => {
	const userData = useRecoilValue(IsAuthUserDataStates);
	const image = userData.thumbnail_path === null ? NoImage : createImageUrl(userData.thumbnail_path);
	const paymentMethod = userData.payment_method === 0 ? '銀行振込' : 'クレジットカード';

	return (
		<div css={Wrapper}>
			<div css={DataBox}>
				<div css={ImageBox}>
					<img src={image} css={ImageStyle} alt={'user image'}/>
				</div>
				<ProfileImageEditModal/>
			</div>
			<div css={DataBox}>
				<label css={DataTitle}>法人名・団体名</label>
				<p css={DataBody}>{userData.organization_name}</p>
			</div>

			<div css={DataBox}>
				<label css={DataTitle}>代表者名</label>
				<p css={DataBody}>{userData.president_name}</p>
			</div>

			<div css={DataBox}>
				<label css={DataTitle}>住所</label>
				<p css={DataBody}>
					<>
						{createPostalCode(userData.postal_code)}<br/>
						{`${userData.address1}${userData.address2}${userData.address3}${userData.address4}`}
					</>
				</p>
			</div>

			<div css={DataBox}>
				<label css={DataTitle}>電話番号</label>
				<p css={DataBody}>{createPhoneNumber(userData.phone_number)}</p>
			</div>
			<div css={DataBox}>
				<label css={DataTitle}>メールアドレス</label>
				<p css={DataBody}>{userData.email}</p>
			</div>

			<p css={TextStyle}>※上記情報に変更があった場合は、お問い合わせよりご連絡ください</p>

			<div css={DataBox}>
				<label css={DataTitle}>パスワード</label>
				<div css={DataBody}>
					<div css={Flex}>
						<p>********</p>
						<ChangePasswordModal/>
					</div>
				</div>
			</div>

			<div css={DataBox}>
				<label css={DataTitle}>支払い方法</label>
				<div css={DataBody}>
					<div css={Flex}>
						<p>{paymentMethod}</p>
						<ChangePaymentMethodModal/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileData;
