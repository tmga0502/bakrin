import React from 'react';
import {ErrorMessageType} from "./ErrorMessage.type";
import {TextStyle} from './ErrorMessage.css';

const ErrorMessage: React.FC<ErrorMessageType> = ({msg}) => {
	return (
		<p className={TextStyle}>{msg}</p>
	);
};

export default ErrorMessage;
