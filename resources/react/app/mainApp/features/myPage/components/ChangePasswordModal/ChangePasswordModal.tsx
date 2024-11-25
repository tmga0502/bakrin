import React, {useEffect, useState} from 'react';
import { useForm} from "react-hook-form";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {useChangePassword} from "@/react/api/query/UserQuery";
import {ErrorMessage, FormGroup, FormLabel} from "@mainLayouts/form";
import Input from "@mainElements/form/InputField/Input";
import {useSetRecoilState} from "recoil";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";

const ChangePasswordModal: React.FC = () => {
	const {register, watch, handleSubmit, reset, formState:{errors}} = useForm()
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const [btnState, setBtnState] = useState(true)
	const [isModalOpen, setIsModalOpen] = useState(false);
	const changePassword = useChangePassword(setIsModalOpen, reset)

	useEffect(() => {
		if (watch('newPassword') === '' || watch('newPasswordConfirm') === ''){
			setBtnState(true)
		}else if (watch('newPassword') === undefined || watch('newPasswordConfirm') === undefined){
			setBtnState(true)
		}
		else if (watch('newPassword') === watch('newPasswordConfirm') ){
			setBtnState(false)
		}else{
			setBtnState(true)
		}
	}, [watch('newPassword'), watch('newPasswordConfirm')]);

	const handleModal = () => {
		setIsModalOpen(!isModalOpen);
	}

	const onSubmit = (data: any) => {
		setIsLoading(true)
		changePassword.mutate(data)
	}

	return (
		<>
			<MainButton text={'変更'} color={'default'} type={'button'} size={'sm'} align={'right'} onClick={handleModal}/>

			{isModalOpen && (
				<Modal onClick={()=>{setIsModalOpen(false)}}>
					<ModalTitle title={'パスワード変更'}/>
					<ModalBody>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormGroup>
								<FormLabel text={'新しいパスワード'} htmlFor={'newPassword'}/>
								<Input type={'password'} id={'newPassword'} {...register('newPassword', {required: '入力してください'})}/>
								{errors.newPassword?.message && typeof errors.newPassword.message === 'string' && (
									<ErrorMessage msg={errors.newPassword.message}/>
								)}
							</FormGroup>
							<FormGroup>
								<FormLabel text={'新しいパスワード(確認用)'} htmlFor={'newPasswordConfirm'}/>
								<Input type={'password'} id={'newPasswordConfirm'} {...register('newPasswordConfirm', {required: '入力してください'})}/>
								{errors.newPasswordConfirm?.message && typeof errors.newPasswordConfirm.message === 'string' && (
									<ErrorMessage msg={errors.newPasswordConfirm.message}/>
								)}
								{watch('newPassword') !== watch('newPasswordConfirm') && (
									<ErrorMessage msg={'パスワードが一致しません'}/>
								)}
							</FormGroup>

							<MainButton text={'変更'} color={'info'} width={'half'} type={'submit'} disabled={btnState}/>
						</form>
					</ModalBody>
				</Modal>
			)}
		</>
	);
};

export default ChangePasswordModal;
