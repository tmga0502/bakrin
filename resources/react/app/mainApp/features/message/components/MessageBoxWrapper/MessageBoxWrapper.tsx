import React from 'react';
import {MessageBoxWrapperType} from "./MessageBoxWrapper.type";
import {Wrapper} from './MessageBoxWrapper.styles';

const MessageBoxWrapper: React.FC<MessageBoxWrapperType> = ({children}) => {
	return (
		<div css={Wrapper}>
			{children}
		</div>
	);
};

export default MessageBoxWrapper;
