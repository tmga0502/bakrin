import React from 'react';
import {MessageHeaderType} from "./MessageHeader.type";
import {Wrapper, TextStyle} from './MessageHeader.styles';

const MessageHeader: React.FC<MessageHeaderType> = ({name}) => {
	return (
		<div css={Wrapper}>
			<p css={TextStyle}>{name}</p>
		</div>
	);
};

export default MessageHeader;
