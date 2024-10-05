import React, {forwardRef} from 'react';
import {InputType} from "./Input.type";
import {InputStyle} from "./Input.styles";

const Input = forwardRef<HTMLInputElement, InputType>((props, ref) => {
	return (
		<input css={InputStyle} ref={ref} {...props} />
	);
});

export default Input;
