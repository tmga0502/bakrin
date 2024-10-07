import React, {useState} from 'react';
import {ImageDeleteModalType} from "./ImageDeleteModal.type";
import {Modal, ModalBody, ModalTitle} from "@/react/app/mainApp/components/layout/Modal";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";
import IconButton from "@/react/app/mainApp/components/elements/button/IconButton/IconButton";

const ImageDeleteModal: React.FC<ImageDeleteModalType> = ({}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<IconButton icon={'trash'} color={'danger'} size={'sm'} onClick={()=>{setIsOpen(!isOpen)}}/>
			{isOpen && (
				<Modal onClick={()=>setIsOpen(false)}>
					<ModalTitle title={'この画像を削除しますか？'}/>
					<ModalBody>
						<div className={'flex justify-between items-center gap-6 py-6'}>
							<MainButton text={'キャンセル'} color={'dark'} type={'button'} width={'full'} size={'sm'} onClick={()=>{setIsOpen(false)}}/>
							<MainButton text={'削除'} color={'danger'} type={'button'} width={'full'} size={'sm'}/>
						</div>
					</ModalBody>
				</Modal>
			)}
		</>
	)
};

export default ImageDeleteModal;
