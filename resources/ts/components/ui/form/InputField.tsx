import React from 'react';
import {InputFieldProps} from "@/ts/components/ui/form/_type";
import {useFormContext} from "react-hook-form";
import FormGroup from "@/ts/components/ui/form/FormGroup";
import FormLabel from "@/ts/components/ui/form/FormLabel";

const InputField: React.FC<InputFieldProps> = ({label, id, type, defaultValue, required, disabled, onChange}) => {
	const {register, formState: {errors}} = useFormContext();
	return (
		<FormGroup>
			<FormLabel label={label} htmlFor={id} required={required}/>
			<input type={type} className="inputStyle" id={id} defaultValue={defaultValue} {...register(id, {required: required ? '入力必須です' : false})} disabled={disabled} onChange={onChange}/>
			{errors[id] && (
				<p className="text-danger text-xs">入力必須です</p>
			)}
		</FormGroup>
	)
}

export default InputField;
