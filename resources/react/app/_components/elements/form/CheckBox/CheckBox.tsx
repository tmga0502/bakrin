import React, {forwardRef} from 'react';
import {CheckBoxType} from "./CheckBox.type";
import {Wrapper, CheckStyle} from './CheckBox.styles';

const CheckBox = forwardRef<HTMLInputElement, CheckBoxType>(({ text, ...props }, ref) => {

	return (
		<label css={Wrapper}>
			<input type={'checkbox'} css={CheckStyle} ref={ref} {...props} />
			{text}
		</label>
	);
});

export default CheckBox;
