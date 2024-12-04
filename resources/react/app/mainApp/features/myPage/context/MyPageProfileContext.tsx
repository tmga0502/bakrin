import React from 'react';
import {createImageUrl, createPhoneNumber, createPostalCode} from "@/react/app/mainApp/functions/formatter";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import NoImage from '@/react/assets/images/noImage.png'
import ProfileImageEditModal from "@mainFeatures/myPage/components/ProfileImageEditModal/ProfileImageEditModal";
import {ChangePasswordModal} from "@mainFeatures/myPage/components";
import ChangePaymentMethodModal from "../components/ChangePaymentMethodModal/ChangePaymentMethodModal";
import MyPageProfileDataBox from "@mainFeatures/myPage/components/ProfileDataBox/MyPageProfileDataBox";

const MyPageProfileContext: React.FC = () => {
	const userData = useRecoilValue(IsAuthUserDataStates);
	const image = userData.thumbnail_path === null ? NoImage : createImageUrl(userData.thumbnail_path);
	const paymentMethod = userData.payment_method === 0 ? '銀行振込' : 'クレジットカード';

	return (
		<div className={'mb-12'}>
			<div className={'mb-4'}>
				<div className={'w-[120px] h-[120px] mx-auto mb-2'}>
					<img src={image} className={'w-full h-full rounded-full object-cover'} alt={'user image'}/>
				</div>
				<ProfileImageEditModal/>
			</div>
			<MyPageProfileDataBox title={'法人名・団体名'}>
				{userData.organization_name}
			</MyPageProfileDataBox>

			<MyPageProfileDataBox title={'代表者名'}>
				{userData.president_name}
			</MyPageProfileDataBox>

			<MyPageProfileDataBox title={'住所'}>
				<>
					{createPostalCode(userData.postal_code)}<br/>
					{`${userData.address1}${userData.address2}${userData.address3}${userData.address4}`}
				</>
			</MyPageProfileDataBox>

			<MyPageProfileDataBox title={'電話番号'}>
				{createPhoneNumber(userData.phone_number)}
			</MyPageProfileDataBox>

			<MyPageProfileDataBox title={'メールアドレス'}>
				{userData.email}
			</MyPageProfileDataBox>

			<p className={'mt-2 mb-6 text-xs'}>※上記情報に変更があった場合は、お問い合わせよりご連絡ください</p>

			<MyPageProfileDataBox title={'パスワード'}>
				<div className={'flex justify-between'}>
					<p>********</p>
					<ChangePasswordModal/>
				</div>
			</MyPageProfileDataBox>

			<MyPageProfileDataBox title={'支払い方法'}>
				<div className={'flex justify-between'}>
					<p>{paymentMethod}</p>
					<ChangePaymentMethodModal/>
				</div>
			</MyPageProfileDataBox>

			<MyPageProfileDataBox title={'紹介コード'}>
				{userData.referral_code}
			</MyPageProfileDataBox>

		</div>
	);
};

export default MyPageProfileContext;
