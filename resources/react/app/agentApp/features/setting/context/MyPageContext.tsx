import React from 'react';
import {useRecoilValue} from "recoil";
import {IsAgentAuthDataStates} from "@/react/app/agentApp/states/AuthStates";
import MainTitle from "@adminLayouts/title/MainTitle/MainTitle";
import ContainerSm from "@adminLayouts/container/ContainerSm/ContainerSm";
import {FormGroup} from "@/react/app/agentApp/components/layouts/form";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {Modal, ModalBody, ModalTitle} from "@/react/app/agentApp/components/elements/Modal";
import EditModal from "@/react/app/agentApp/features/setting/components/editModal/EditModal";
import {createPhoneNumber, createPostalCode } from '@/react/app/adminApp/functions/formatter';

const MyPageContext = () => {
	const authData = useRecoilValue(IsAgentAuthDataStates)
	const [isModalOpen, setIsModalOpen] = React.useState(false)

	const address = authData.address1 !== null
	const bankType = authData.bank_type !== null ? authData.bank_type : ''

	const handleModalOpen = () => {
		setIsModalOpen(true)
	}

	return (
		<div>
			<MainTitle title={'マイページ'}/>

			<ContainerSm>
				<FormGroup>
					<label className={'inline-block text-xs font-bold mb-1'}>名前</label>
					<p>{authData.name}</p>
				</FormGroup>

				<FormGroup>
					<label className={'inline-block text-xs font-bold mb-1'}>メールアドレス</label>
					<p>{authData.email}</p>
				</FormGroup>

				<FormGroup>
					<label className={'inline-block text-xs font-bold mb-1'}>電話番号</label>
					<p>{createPhoneNumber(authData.phone_number)}</p>
				</FormGroup>

				<FormGroup>
					<label className={'inline-block text-xs font-bold mb-1'}>郵便番号</label>
					<p>{createPostalCode(authData.postal_code)}</p>
				</FormGroup>

				<FormGroup>
					<label className={'inline-block text-xs font-bold mb-1'}>住所</label>
					<p>{address}</p>
				</FormGroup>

				<FormGroup>
					<label className={'inline-block text-xs font-bold mb-1'}>銀行</label>
					<p>{authData.bank_name}</p>
				</FormGroup>

				<FormGroup>
					<label className={'inline-block text-xs font-bold mb-1'}>支店</label>
					<p>{authData.branch_name}</p>
				</FormGroup>

				<FormGroup>
					<label className={'inline-block text-xs font-bold mb-1'}>種別</label>
					<p>{bankType}</p>
				</FormGroup>

				<FormGroup>
					<label className={'inline-block text-xs font-bold mb-1'}>口座番号</label>
					<p>{authData.bank_number}</p>
				</FormGroup>

				<FormGroup>
					<label className={'inline-block text-xs font-bold mb-1'}>口座名義</label>
					<p>{authData.bank_account}</p>
				</FormGroup>

				<div className={'text-center mt-12'}>
					<MainButton text={'編集'} color={'mainGreen'} type={'button'} onClick={handleModalOpen}/>
				</div>

				{isModalOpen && (
					<Modal onClick={()=>{setIsModalOpen(false)}}>
						<ModalTitle title={'ユーザーデータ編集'}/>
						<ModalBody>
							<EditModal setIsModalOpen={setIsModalOpen}/>
						</ModalBody>
					</Modal>
				)}

			</ContainerSm>
		</div>
	);
};

export default MyPageContext;
