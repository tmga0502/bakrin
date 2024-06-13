import React, {useState} from 'react';
import {IoTrashOutline} from "react-icons/io5";
import {Modal, ModalBody, ModalTitle} from "@/ts/components/ui/modal";
import {MainButton} from "@/ts/components/ui/button";
import { DeleteModalProps } from './ImageDeleteModal.type';


const ImageDeleteModal: React.FC<DeleteModalProps> = ({imageId}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button className={'rounded-full w-10 h-10'} onClick={()=>{setIsOpen(!isOpen)}}>
                <IoTrashOutline className={'text-danger w-5 h-5 mx-auto'}/>
            </button>
            {isOpen && (
                <Modal onClick={()=>setIsOpen(false)}>
                    <ModalTitle title={'この画像を削除しますか？'}/>
                    <ModalBody>
                        <div className={'flex justify-between items-center gap-6 py-6'}>
                            <MainButton value={'キャンセル'} color={'dark'} type={'button'} width={'full'} size={'sm'} onClick={()=>{setIsOpen(false)}}/>
                            <MainButton value={'削除'} color={'danger'} type={'button'} width={'full'} size={'sm'}/>
                        </div>
                    </ModalBody>
                </Modal>
            )}
        </>
    )
};

export default ImageDeleteModal;
