import React, {useState} from 'react';
import {DataDeleteModalType} from "./DataDeleteModal.type";
import {ButtonBox} from './DataDeleteModal.styles';
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";
import {Modal, ModalBody, ModalTitle} from "@/react/app/mainApp/components/layout/Modal";

const DataDeleteModal: React.FC<DataDeleteModalType> = ({}) => {
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

export default DataDeleteModal;
