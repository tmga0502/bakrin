import React, {useState} from 'react';
import {MainButton} from "@/ts/appMain/components/_ui/button/Button";
import {Modal, ModalBody, ModalTitle} from "@/ts/appMain/components/_ui/modal/Modal";
import {FileField} from "@/ts/appMain/components/_ui/form/Form";
import {FormProvider, useForm} from "react-hook-form";

type DeleteModalProps = {
    dateId: number,
}

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
