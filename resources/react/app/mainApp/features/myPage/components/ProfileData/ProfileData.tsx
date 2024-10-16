import React from 'react';
import {Wrapper, TextStyle, DataBody, DataBox, DataTitle, ImageBox, ImageStyle, Flex} from './ProfileData.styles';
import {createImageUrl, createPhoneNumber, createPostalCode} from "@/react/app/mainApp/functions/formatter";
import {useRecoilValue} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";
import NoImage from '@/react/assets/images/noImage.png'
import ProfileImageEditModal from "@mainFeatures/myPage/components/ProfileImageEditModal/ProfileImageEditModal";
import {ChangePasswordModal} from "@mainFeatures/myPage/components";
import ChangePaymentMethodModal from "../ChangePaymentMethodModal/ChangePaymentMethodModal";

const ProfileData: React.FC = () => {
	const producerData = useRecoilValue(IsAuthProducerDataStates);
	const image = producerData.imgPath === null ? NoImage : createImageUrl(producerData.imgPath);
	const paymentMethod = producerData.paymentMethod === 0 ? '銀行振込' : 'クレジットカード';

	return (
		<div css={Wrapper}>
			<div css={DataBox}>
				<div css={ImageBox}>
					<img src={image} css={ImageStyle} alt={'producer image'}/>
				</div>
				<ProfileImageEditModal/>
			</div>
			<div css={DataBox}>
				<label css={DataTitle}>法人名・団体名</label>
				<p css={DataBody}>{producerData.organizationName}</p>
			</div>

			<div css={DataBox}>
				<label css={DataTitle}>代表者名</label>
				<p css={DataBody}>{producerData.presidentName}</p>
			</div>

			<div css={DataBox}>
				<label css={DataTitle}>住所</label>
				<p css={DataBody}>
					<>
						{createPostalCode(producerData.postalCode)}<br/>
						{`${producerData.address1}${producerData.address2}${producerData.address3}${producerData.address4}`}
					</>
				</p>
			</div>

			<div css={DataBox}>
				<label css={DataTitle}>電話番号</label>
				<p css={DataBody}>{createPhoneNumber(producerData.tel)}</p>
			</div>
			<div css={DataBox}>
				<label css={DataTitle}>メールアドレス</label>
				<p css={DataBody}>{producerData.email}</p>
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
