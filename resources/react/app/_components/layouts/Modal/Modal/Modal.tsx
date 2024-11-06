import React from 'react';
import {ModalType} from './Modal.type';
import {Box, Wrapper} from './Modal.styles'

const Modal: React.FC<ModalType> = ({children, onClick}) => {
	const handleBoxClick = (event: React.MouseEvent) => {
		event.stopPropagation();
	};

    return (
        <div css={Wrapper} onClick={onClick}>
            <div css={Box}　onClick={handleBoxClick}>
                {children}
            </div>
        </div>
    );
};
export default Modal
