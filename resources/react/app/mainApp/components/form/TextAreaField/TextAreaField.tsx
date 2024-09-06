import React from 'react';
import {useFormContext} from "react-hook-form";
import FormGroup from "../FormGroup/FormGroup";
import FormLabel from "../FormLabel/FormLabel";
import { TextareaFieldType } from './TextAreaField.type';

const TextAreaField: React.FC<TextareaFieldType> = ({label, id, rows, defaultValue, required, disabled, onChange}) => {
	const {register, formState: {errors}} = useFormContext();
	return (
		<FormGroup>
			<FormLabel label={label} htmlFor={id} required={required}/>
			<textarea className="inputStyle" id={id} rows={rows} {...register(id, {required: required ? '入力必須です' : false})} disabled={disabled} onChange={onChange} defaultValue={defaultValue}></textarea>
			{errors[id] && (
				<p className="text-danger text-xs">入力必須です</p>
			)}
		</FormGroup>
	)
}

export default TextAreaField;
