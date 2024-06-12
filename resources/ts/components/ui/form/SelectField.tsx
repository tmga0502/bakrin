import React from 'react';
import {SelectFieldProps} from "@/ts/components/ui/form/_type";
import {useFormContext} from "react-hook-form";
import FormGroup from "@/ts/components/ui/form/FormGroup";
import FormLabel from "@/ts/components/ui/form/FormLabel";

const SelectField: React.FC<SelectFieldProps> = ({label, id, optionObj, defaultValue}) => {
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
