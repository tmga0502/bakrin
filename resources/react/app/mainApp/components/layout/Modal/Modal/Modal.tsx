import React from 'react';
import {ModalType} from './Modal.type';
import {Box, Wrapper} from './Modal.styles'

const Modal: React.FC<ModalType> = ({children, onClick}) => {
    return (
        <div css={Wrapper} onClick={onClick}>
            <div css={Box}>
                {children}
            </div>
        </div>
    );
};
export default Modal
