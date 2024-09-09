import React, {useState} from 'react';
import {MainButton} from "@/react/app/mainApp/components/button";
import {Modal, ModalBody, ModalTitle} from "@/react/app/mainApp/components/modal";
import { DeleteModalProps } from './DataDeleteModal.type';

const DataDeleteModal: React.FC<DeleteModalProps> = ({dateId}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className={'block w-full mb-6'}>
                <MainButton value={'削除'} width={'full'} color={'danger'} type={'button'} onClick={() => {setIsOpen(!isOpen)}}/>
            </div>
            {isOpen && (
                <Modal onClick={()=>setIsOpen(false)}>
                    <ModalTitle title={'このデータを削除しますか？'}/>
                    <ModalBody>
                        <div className={'flex justify-between items-center gap-6 py-6'}>
                            <MainButton value={'キャンセル'} color={'dark'} type={'button'} width={'full'} size={'sm'} onClick={() => {
                                setIsOpen(false)
                            }}/>
                            <MainButton value={'削除'} color={'danger'} type={'button'} width={'full'} size={'sm'}/>
                        </div>
                    </ModalBody>
                </Modal>
            )}
        </>
    )
};

export default DataDeleteModal;
