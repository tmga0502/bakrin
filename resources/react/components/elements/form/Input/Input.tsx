import React, {forwardRef} from 'react';
import {InputType} from "./Input.type";
import {InputStyle} from "@/react/components/elements/form/Input/Input.css";

const Input = forwardRef<HTMLInputElement, InputType>((props, ref) => {
	return (
		<input className={InputStyle} ref={ref} {...props} />
	);
});

export default Input;
