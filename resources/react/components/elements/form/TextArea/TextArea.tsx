import React, {forwardRef} from 'react';
import {TextAreaType} from "./TextArea.type";
import {TextareaStyle} from './TextArea.css';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaType>((props, ref) => {
	return (
		<textarea className={TextareaStyle} ref={ref} {...props}></textarea>
	);
});

export default TextArea;
