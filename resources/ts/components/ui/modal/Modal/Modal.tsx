import React from 'react';
import {ModalType} from "@/ts/components/ui/modal/Modal/Modal.type";

const Modal: React.FC<ModalType> = ({children, onClick}) => {
    return (
        <div className={'bg-[rgba(117,117,117,0.79)] w-screen h-screen fixed top-0 left-0 z-[9999]'} onClick={onClick}>
            <div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white max-w-[1180px] min-w-[300px] max-h-3/4 p-4 rounded-md'}>
                {children}
            </div>
        </div>
    );
};
export default Modal
