import React, {useState} from 'react';
import {ButtonBox} from './ItemDataDeleteModal.styles';
import MainButton from "@mainElements/button/MainButton/MainButton";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";

const ItemDataDeleteModal: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className={'block w-full mb-6'}>
				<MainButton text={'削除'} width={'full'} color={'danger'} type={'button'} onClick={() => {setIsOpen(!isOpen)}}/>
			</div>
			{isOpen && (
				<Modal onClick={()=>setIsOpen(false)}>
					<ModalTitle title={'このデータを削除しますか？'}/>
					<ModalBody>
						<div css={ButtonBox}>
							<MainButton text={'キャンセル'} color={'dark'} type={'button'} width={'full'} size={'sm'} onClick={() => {
								setIsOpen(false)
							}}/>
							<MainButton text={'削除'} color={'danger'} type={'button'} width={'full'} size={'sm'}/>
						</div>
					</ModalBody>
				</Modal>
			)}
		</>
	)
};

export default ItemDataDeleteModal;
