import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {ErrorMessage, FormGroup, FormLabel} from "@mainLayouts/form";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";
import {FileField} from "@mainElements/form";
import {useCreateImage} from "@/react/api/query/ItemImageQuery";
import {ItemType} from "@/react/types/ItemType";

const AddImageModal: React.FC<{itemData: ItemType}> = ({itemData}) => {
	const { register, handleSubmit, formState:{errors}} = useForm({defaultValues:{
			itemId: itemData.id,
			img: []
		}});
	const [isOpen, setIsOpen] = useState(false);
	const create = useCreateImage(setIsOpen)

	const onSubmit = (data:any) => {
		create.mutate(data)
	}

	return (
		<>
			<div className={'w-full'}>
				<MainButton text={'画像追加'} width={'full'} color={'info'} type={'button'} onClick={() => {setIsOpen(!isOpen)}}/>
			</div>
			{isOpen && (
				<Modal onClick={() => {setIsOpen(false)}}>
					<ModalTitle title={'追加する画像を選択してください'}/>
					<ModalBody>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormGroup>
								<FormLabel text={'画像'} htmlFor={'image'}/>
								<FileField id={'image'} {...register('img', {required: '選択してください'})}/>
								{errors.img && (
									<ErrorMessage msg={errors.img.message as string}/>
								)}
							</FormGroup>
							<div className={'mt-8 text-center'}>
								<MainButton text={'追加'} color={'info'} type={'submit'} width={'half'}/>
							</div>
						</form>
					</ModalBody>
				</Modal>
			)}
		</>
	)
};

export default AddImageModal;
