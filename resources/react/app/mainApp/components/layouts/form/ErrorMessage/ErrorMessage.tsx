import React from 'react';

type ErrorMessageType = {
	msg: string,
}

const ErrorMessage: React.FC<ErrorMessageType> = ({msg}) => {
	return (
		<p className={'text-xs text-danger mt-2'}>{msg}</p>
	);
};

export default ErrorMessage;
