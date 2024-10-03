import React, {forwardRef} from 'react';
import {RadioType} from "./Radio.type";
import {Wrapper, RadioStyle} from './Radio.css';

const Radio = forwardRef<HTMLInputElement, RadioType>(({ text, ...props }, ref) => {

	return (
		<label className={Wrapper}>
			<input type={'radio'} className={RadioStyle} ref={ref} {...props} />
			{text}
		</label>
	);
});

export default Radio;
