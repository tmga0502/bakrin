import React from 'react';
import {MessageViewerType} from "./MessageViewer.type";
import {Wrapper} from './MessageViewer.styles';

const MessageViewer: React.FC<MessageViewerType> = ({children}) => {
	return (
		<div css={Wrapper}>
			{children}
		</div>
	);
};

export default MessageViewer;
