import React, {forwardRef} from 'react';

type InputFieldType = React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputFieldType>((props, ref) => {
	return (
		<input className={'inputStyle'} ref={ref} {...props} />
	);
});

export default Input;
