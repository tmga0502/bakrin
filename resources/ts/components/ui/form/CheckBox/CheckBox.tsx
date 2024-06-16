import React from 'react';
import { CheckBoxType } from './CheckBox.type';
import {useFormContext} from "react-hook-form";

const CheckBox:React.FC<CheckBoxType> = ({id, label,value, name, defaultChecked, defaultValue}) => {
	const {register} = useFormContext();
	return(
		<div className="flex items-center mb-4">
			<input id={String(id)} type="checkbox" value={value} className="radioStyle radioAccent" defaultValue={defaultValue} defaultChecked={defaultChecked} {...register(String(name))}/>
			<label htmlFor={String(id)} className="ms-2 text-sm font-medium">{label}</label>
		</div>
	)
}

export default CheckBox;
