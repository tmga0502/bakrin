import React, {forwardRef} from 'react';
import {InputFieldType} from "./InputField.type";
import {InputStyle} from "./InputField.styles";

const Input = forwardRef<HTMLInputElement, InputFieldType>((props, ref) => {
	return (
		<input css={InputStyle} ref={ref} {...props} />
	);
});

export default Input;
