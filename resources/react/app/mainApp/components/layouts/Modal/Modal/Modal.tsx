import React, {ReactNode} from 'react';

type ModalType = {
	children: ReactNode,
	onClick?:any
}

const Modal: React.FC<ModalType> = ({children, onClick}) => {
	const handleBoxClick = (event: React.MouseEvent) => {
		event.stopPropagation();
	};

    return (
        <div className={'w-screen h-screen bg-[rgba(117,117,117,0.79)] fixed top-0 left-0 z-[99999] '} onClick={onClick}>
            <div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white max-w-[1180px] min-x-[300px] max-h-[80%] rounded-md text-left z-[100000]'}　onClick={handleBoxClick}>
                {children}
            </div>
        </div>
    );
};
export default Modal
