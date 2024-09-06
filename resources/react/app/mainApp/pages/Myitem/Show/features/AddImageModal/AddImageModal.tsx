import React, {useState} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {MainButton} from "@/react/app/mainApp/components/button";
import {Modal, ModalBody, ModalTitle} from "@/react/app/mainApp/components/modal";
import {FileField} from "@/react/app/mainApp/components/form";
import { DeleteModalProps } from './AddImageModal.type';


const AddImageModal: React.FC<DeleteModalProps> = ({dateId}) => {
    const methods = useForm();
    const [isOpen, setIsOpen] = useState(false);
    const { handleSubmit} = methods;
    const onSubmit = (data:any) => {
        console.log(data)
    }
    return (
        <>
            <div className={'block w-full mb-6'}>
                <MainButton value={'画像追加'} width={'full'} color={'info'} type={'button'} onClick={() => {setIsOpen(!isOpen)}}/>
            </div>
            {isOpen && (
                <Modal onClick={() => {setIsOpen(false)}}>
                    <ModalTitle title={'追加する画像を選択してください'}/>
                    <ModalBody>
                        <FormProvider {...methods}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FileField label={'画像'} id={'img'}/>
                                <div className="mt-8 text-center">
                                    <MainButton value={'追加'} color={'success'} type={'submit'} width={'half'}/>
                                </div>
                            </form>
                        </FormProvider>
                    </ModalBody>
                </Modal>
            )}
        </>
    )
};

export default AddImageModal;
