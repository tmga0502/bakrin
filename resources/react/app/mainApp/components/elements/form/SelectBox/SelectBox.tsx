import React, {forwardRef} from 'react';
import {SelectBoxType} from "./SelectBox.type";
import {SelectStyle} from "./SelectBox.styles";

const SelectBox = forwardRef<HTMLSelectElement, SelectBoxType>(({ optionObj, addBlankOption = false, defaultValue, onChange, ...props }, ref) => {
	return (
		<div>
			<label css={SelectStyle}>
				<select ref={ref} defaultValue={defaultValue} {...props} onChange={onChange}>
					{addBlankOption && (
						<option value={''} >-- 選択してください --</option>
					)}
					{optionObj.map((option: { id: string | number, name: string }, index: number) => (
						<option value={option.id} key={index}>{option.name}</option>
					))}
				</select>
			</label>
		</div>
)
	;
});

export default SelectBox;
