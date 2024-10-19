import React from 'react';
import {ErrorMessageType} from "./ErrorMessage.type";
import {TextStyle} from './ErrorMessage.styles';

const ErrorMessage: React.FC<ErrorMessageType> = ({msg}) => {
	return (
		<p css={TextStyle}>{msg}</p>
	);
};

export default ErrorMessage;
