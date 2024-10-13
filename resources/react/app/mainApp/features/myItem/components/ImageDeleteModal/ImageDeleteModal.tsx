import React, {useState} from 'react';
import {ButtonBox} from './ImageDeleteModal.styles'
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";
import MainButton from "@mainElements/button/MainButton/MainButton";
import IconButton from "@mainElements/button/IconButton/IconButton";
import {useForm} from "react-hook-form";
import {ImageDataType} from "@mainFeatures/myItem/types";
import {useDeleteImage} from "@/react/api/query/ItemImageQuery";


const ImageDeleteModal: React.FC<ImageDataType> = ({imageId}) => {
	const {getValues} = useForm({defaultValues:{
			imageId: imageId
		}})
	const [isOpen, setIsOpen] = useState(false);
	const del = useDeleteImage(setIsOpen)

	const onSubmit = () => {
		del.mutate(getValues())
	}

	return (
		<>
			<IconButton icon={'trash'} color={'danger'} size={'sm'} onClick={()=>{setIsOpen(!isOpen)}}/>
			{isOpen && (
				<Modal onClick={()=>setIsOpen(false)}>
					<ModalTitle title={'この画像を削除しますか？'}/>
					<ModalBody>
						<div css={ButtonBox}>
							<MainButton text={'キャンセル'} color={'dark'} type={'button'} width={'full'} size={'sm'} onClick={()=>{setIsOpen(false)}}/>
							<MainButton text={'削除'} color={'danger'} type={'button'} width={'full'} size={'sm'} onClick={onSubmit}/>
						</div>
					</ModalBody>
				</Modal>
			)}
		</>
	)
};

export default ImageDeleteModal;
