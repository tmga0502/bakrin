import React, {useState} from 'react';
import {ButtonBox} from './ItemDataDeleteModal.styles';
import MainButton from "@mainElements/button/MainButton/MainButton";
import {Modal, ModalBody, ModalTitle} from "@mainLayouts/Modal";
import {useForm} from "react-hook-form";
import {useDeleteItem} from "@/react/api/query/ItemQuery";

const ItemDataDeleteModal: React.FC<{uuid: string}> = ({uuid}) => {
	const {getValues} = useForm({defaultValues:{
			itemUuid: uuid
		}})
	const [isOpen, setIsOpen] = useState(false);
	const del = useDeleteItem(setIsOpen)

	const onsubmit = () => {
		del.mutate(getValues())
	}

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
							<MainButton text={'削除'} color={'danger'} type={'submit'} width={'full'} size={'sm'} onClick={onsubmit}/>
						</div>
					</ModalBody>
				</Modal>
			)}
		</>
	)
};

export default ItemDataDeleteModal;
