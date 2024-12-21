import React from 'react';
import MainButton from "@/react/app/agentApp/components/elements/button/MainButton/MainButton";
import MainCard from "@/react/app/agentApp/components/layouts/Card/MainCard/MainCard";
import {useRecoilValue} from "recoil";
import {IsAgentAuthDataStates} from "@/react/app/agentApp/states/AuthStates";
import {Modal, ModalBody, ModalTitle} from "@/react/app/agentApp/components/elements/Modal";
import ReferralQrCode from "@/react/app/agentApp/features/home/components/referralQrCode/ReferralQrCode";

const ReferralCode = () => {
	const [isQrModalOpen, setIsQrModalOpen] = React.useState(false)
	const userData = useRecoilValue(IsAgentAuthDataStates)
	const linkUrl = `${location.origin}/register/${userData.referral_code}`
	console.log(linkUrl);

	const handleModalOpen = () => {
		setIsQrModalOpen(true)
	}

	return (
		<MainCard title={'紹介コード'}>
			<div className={'mb-6'}>
				<label className={'block mb-1'}>URL</label>
				<div className={'flex items-center gap-2'}>
					<input className={'inputStyle'} readOnly={true} value={linkUrl}/>
					<MainButton type={'button'} color={'default'} text={'コピー'} size={'sm'}/>
				</div>
			</div>

			<div className={'mb-2'}>
				<label className={'block mb-1'}>QRコード</label>
				<MainButton type={'button'} color={'default'} text={'表示する'} size={'sm'} align={'left'} onClick={handleModalOpen}/>
			</div>

			{isQrModalOpen && (
				<Modal onClick={() => setIsQrModalOpen(false)}>
					<ModalTitle title={'招待用QRコード'}/>
					<ModalBody>
						<div className={'flex justify-center p-8'}>
							<ReferralQrCode linkUrl={linkUrl}/>
						</div>
					</ModalBody>
				</Modal>
			)}
		</MainCard>
	);
};

export default ReferralCode;
