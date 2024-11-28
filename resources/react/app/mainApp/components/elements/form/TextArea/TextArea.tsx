import React, {forwardRef} from 'react';

type TextAreaType = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaType>((props, ref) => {
	return (
		<textarea className={'textAreaStyle'} ref={ref} {...props}></textarea>
	);
});

export default TextArea;
