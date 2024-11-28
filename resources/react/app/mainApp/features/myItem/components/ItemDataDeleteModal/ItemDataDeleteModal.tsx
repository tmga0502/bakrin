import React, {useState} from 'react';
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
			<div className={'block w-full mb-6 sm:mb-0'}>
				<MainButton text={'削除'} width={'full'} color={'danger'} type={'button'} onClick={() => {setIsOpen(!isOpen)}}/>
			</div>
			{isOpen && (
				<Modal onClick={()=>setIsOpen(false)}>
					<ModalTitle title={'このデータを削除しますか？'}/>
					<ModalBody>
						<div className={'flex justify-between items-center gap-6 py-6'}>
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
