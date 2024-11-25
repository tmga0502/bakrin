import React, {useState} from 'react';
import MainButton from "@mainElements/button/MainButton/MainButton";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";
import {ErrorMessage, FormGroup, FormLabel} from "@mainLayouts/form";
import {FileField} from "@mainElements/form";
import {ButtonWrapper} from "@mainFeatures/myItem/components/AddImageModal/AddImageModal.styles";
import {useForm} from "react-hook-form";
import {useUserUpdate} from "@/react/api/query/UserQuery";

const ProfileImageEditModal = () => {
	const {handleSubmit, register, formState:{errors}} = useForm()
	const [isModalOpen, setIsModalOpen] = useState(false);
	const update = useUserUpdate(setIsModalOpen)

	const handleModalState = () => {
		setIsModalOpen(!isModalOpen);
	}

	const onSubmit = (data: any) => {
		update.mutate(data)
	}

	return (
		<>
			<MainButton text={'変更'} color={'dark'} type={'button'} size={'sm'} onClick={handleModalState}/>

			{isModalOpen && (
				<Modal onClick={()=>{setIsModalOpen(false)}}>
					<ModalTitle title={'プロフィール画像変更'}/>
					<ModalBody>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormGroup>
								<FormLabel text={'画像'} htmlFor={'image'}/>
								<FileField id={'image'} {...register('img', {required: '選択してください'})}/>
								{errors.img && (
									<ErrorMessage msg={errors.img.message as string}/>
								)}
							</FormGroup>
							<div css={ButtonWrapper}>
								<MainButton text={'変更'} color={'info'} type={'submit'} width={'half'}/>
							</div>
						</form>
					</ModalBody>
				</Modal>
			)}
		</>
	);
};

export default ProfileImageEditModal;
