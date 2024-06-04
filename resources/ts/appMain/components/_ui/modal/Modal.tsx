import React, {ReactNode} from 'react';

const Modal = (props:{children: ReactNode, onClick?:any}) => {
    return (
        <div className={'bg-[rgba(117,117,117,0.79)] w-screen h-screen fixed top-0 left-0 z-[9999]'} onClick={props.onClick}>
            <div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white max-w-[1180px] min-w-[300px] max-h-3/4 p-4 rounded-md'}>
                {props.children}
            </div>
        </div>
    );
};

const ModalTitle = (props:{title: string}) => {
    return(
        <div className={'p-4 border-b'}>{props.title}</div>
    )
}

const ModalBody = (props:{children: ReactNode}) => {
    return(
        <div className={'p-4'}>{props.children}</div>
    )
}

export {
    Modal,
    ModalTitle,
    ModalBody
};
