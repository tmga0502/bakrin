import React, {forwardRef} from 'react';
import {SelectType} from "./Select.type";
import {SelectStyle} from "./Select.styles";

const Select = forwardRef<HTMLSelectElement, SelectType>(({ optionObj, ...props }, ref) => {
	return (
		<div>
			<label css={SelectStyle}>
				<select ref={ref} {...props}>
					{optionObj.map((option: { id: string | number, name: string }, index: number) => (
						<option  value={option.id} key={index}>{option.name}</option>
					))}
				</select>
			</label>
		</div>
)
	;
});

export default Select;
