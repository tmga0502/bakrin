import React from 'react';
import MainButton from "@/react/app/agentApp/components/elements/button/MainButton/MainButton";
import MainCard from "@/react/app/agentApp/components/layouts/Card/MainCard/MainCard";
import {useRecoilValue} from "recoil";
import {IsAgentAuthDataStates} from "@/react/app/agentApp/states/AuthStates";

const ReferralCode = () => {
	const userData = useRecoilValue(IsAgentAuthDataStates)
	const linkUrl = `${location.origin}/register/${userData.referral_code}`
	console.log(linkUrl);
	return (
		<MainCard title={'紹介コード'}>
			<div className={'mb-6'}>
				<label className={'block mb-1'}>URL</label>
				<div className={'flex items-center gap-2'}>
					<input className={'inputStyle'} readOnly={true} value={'https://www.google.com'}/>
					<MainButton type={'button'} color={'default'} text={'コピー'} size={'sm'}/>
				</div>
			</div>

			<div className={'mb-2'}>
				<label className={'block mb-1'}>QRコード</label>
				<MainButton type={'button'} color={'default'} text={'表示する'} size={'sm'} align={'left'}/>
			</div>
		</MainCard>
	);
};

export default ReferralCode;
