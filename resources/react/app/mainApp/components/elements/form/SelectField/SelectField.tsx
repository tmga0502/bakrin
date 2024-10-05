import React from 'react';
import {useFormContext} from "react-hook-form";
import FormGroup from "../FormGroup/FormGroup";
import FormLabel from "../FormLabel/FormLabel";
import { SelectFieldType } from './SelectField.type';

const SelectField: React.FC<SelectFieldType> = ({label, id, optionObj, defaultValue}) => {
	const {register} = useFormContext();
	return (
		<FormGroup>
			<FormLabel label={label} htmlFor={id}/>
			<select className="selectBoxStyle" id={id} defaultValue={defaultValue} {...register(id)}>
				{optionObj.map((option: { id: string | number, name: string }, index: number) => (
					<option value={option.id} key={index}>{option.name}</option>
				))}
			</select>
		</FormGroup>
	)
}

export default SelectField;
