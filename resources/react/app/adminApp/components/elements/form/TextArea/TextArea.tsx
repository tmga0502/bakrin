import React, {forwardRef} from 'react';
import {TextAreaType} from "./TextArea.type";
import {TextareaStyle} from './TextArea.styles';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaType>((props, ref) => {
	return (
		<textarea css={TextareaStyle} ref={ref} {...props}></textarea>
	);
});

export default TextArea;
