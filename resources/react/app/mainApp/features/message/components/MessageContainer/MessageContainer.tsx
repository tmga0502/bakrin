import React from 'react';
import {MessageContainerType} from "./MessageContainer.type";
import {Wrapper} from './MessageContainer.styles';

const MessageContainer: React.FC<MessageContainerType> = ({children}) => {
	return (
		<div css={Wrapper}>
			{children}
		</div>
	);
};

export default MessageContainer;
