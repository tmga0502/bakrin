import React, {ReactNode, useEffect} from 'react';
import {MdClose} from "react-icons/md";

type ModalType = {
    modalTitle: string,
    modalOpen: boolean,
    width?: string,
    setModalOpen:React.Dispatch<boolean>,
    children: ReactNode
}

const Modal = (props:ModalType) => {
    useEffect(() => {
        if (props.modalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [props.modalOpen]);
    const Width = props.width ?? 'max-w-[500px]';
    if (props.modalOpen){
        return(
            <>
                <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-50" ></div>
                <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 ${Width} min-w-[350px] max-h-[80vh] bg-white border-2 rounded-md p-3 overflow-scroll z-[100]`}>
                    <div className="flex justify-between items-center pb-2 mb-8 border-b-2 ">
                        <p className="text-lg m-0">{props.modalTitle}</p>
                        <MdClose className="text-lg hover:cursor-pointer" onClick={()=>{props.setModalOpen(!props.modalOpen)}}/>
                    </div>

                    {props.children}

                </div>
            </>
        )
    }
};

export default Modal;
