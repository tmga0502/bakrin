import React, {useState} from 'react';
import {AddImageModalType} from "./AddImageModal.type";
import {ButtonWrapper, Wrapper} from './AddImageModal.styles'
import {useForm} from "react-hook-form";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";
import {FormGroup, FormLabel} from "@/react/app/mainApp/components/layout/form";
import {Modal, ModalBody, ModalTitle} from "@/react/app/mainApp/components/layout/Modal";
import {FileField} from "@/react/app/mainApp/components/elements/form";

const AddImageModal: React.FC<AddImageModalType> = () => {
	const { register, handleSubmit} = useForm();
	const [isOpen, setIsOpen] = useState(false);
	const onSubmit = (data:any) => {
		console.log(data)
	}
	return (
		<>
			<div css={Wrapper}>
				<MainButton text={'画像追加'} width={'full'} color={'info'} type={'button'} onClick={() => {setIsOpen(!isOpen)}}/>
			</div>
			{isOpen && (
				<Modal onClick={() => {setIsOpen(false)}}>
					<ModalTitle title={'追加する画像を選択してください'}/>
					<ModalBody>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormGroup>
								<FormLabel text={'画像'} htmlFor={'image'}/>
								<FileField id={'image'} {...register('img')}/>
							</FormGroup>
							<div css={ButtonWrapper}>
								<MainButton text={'追加'} color={'success'} type={'submit'} width={'half'}/>
							</div>
						</form>
					</ModalBody>
				</Modal>
			)}
		</>
	)
};

export default AddImageModal;
