import React, {forwardRef} from 'react';
import {RadioType} from "./Radio.type";
import {Wrapper, RadioStyle} from './Radio.styles';

const Radio = forwardRef<HTMLInputElement, RadioType>(({ text, ...props }, ref) => {

	return (
		<label css={Wrapper}>
			<input type={'radio'} css={RadioStyle} ref={ref} {...props} />
			{text}
		</label>
	);
});

export default Radio;
