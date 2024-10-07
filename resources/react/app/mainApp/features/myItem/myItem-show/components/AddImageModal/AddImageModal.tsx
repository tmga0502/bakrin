import React, {useState} from 'react';
import {AddImageModalType} from "./AddImageModal.type";
import {useForm} from "react-hook-form";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";
import {FormGroup, FormLabel} from "@/react/app/mainApp/components/layout/form";
import Input from "@/react/app/mainApp/components/elements/form/Input/Input";
import {Modal, ModalBody, ModalTitle} from "@/react/app/mainApp/components/layout/Modal";

const AddImageModal: React.FC<AddImageModalType> = () => {
	const { register, handleSubmit} = useForm();
	const [isOpen, setIsOpen] = useState(false);
	const onSubmit = (data:any) => {
		console.log(data)
	}
	return (
		<>
			<div className={'block w-full mb-6'}>
				<MainButton text={'画像追加'} width={'full'} color={'info'} type={'button'} onClick={() => {setIsOpen(!isOpen)}}/>
			</div>
			{isOpen && (
				<Modal onClick={() => {setIsOpen(false)}}>
					<ModalTitle title={'追加する画像を選択してください'}/>
					<ModalBody>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormGroup>
								<FormLabel text={'画像'} htmlFor={'image'}/>
								<Input id={'image'} type={'file'} {...register('img')}/>
							</FormGroup>
							<div className="mt-8 text-center">
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
