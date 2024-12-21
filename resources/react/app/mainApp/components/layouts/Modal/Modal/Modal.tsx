import React, {ReactNode} from 'react';
import { tv } from 'tailwind-variants';

type ModalType = {
	children: ReactNode,
	size?: 'md' | 'lg',
	onClick?:any
}

const ModalTv = tv({
	'base': 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white min-w-[300px] w-4/5 max-h-[80%] rounded-md text-left z-[100000] overflow-y-scroll',
	variants:{
		size: {
			md: 'max-w-[600px]',
			lg: 'max-w-[1180px]',
		}
	}
})

const Modal: React.FC<ModalType> = ({children, size = 'md', onClick}) => {
	const handleBoxClick = (event: React.MouseEvent) => {
		event.stopPropagation();
	};

    return (
        <div className={'w-screen h-screen bg-black fixed top-0 left-0 z-[99999] '} onClick={onClick}>
            <div className={ModalTv({size: size})}　onClick={handleBoxClick}>
                {children}
            </div>
        </div>
    );
};
export default Modal
