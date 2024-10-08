import React, {forwardRef} from 'react';
import {SelectBoxType} from "./SelectBox.type";
import {SelectStyle} from "./SelectBox.styles";

const SelectBox = forwardRef<HTMLSelectElement, SelectBoxType>(({ optionObj, ...props }, ref) => {
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

export default SelectBox;
