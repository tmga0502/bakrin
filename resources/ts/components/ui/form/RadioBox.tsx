import React from 'react';
import {RadioType} from "@/ts/components/ui/form/_type";

const RadioBox:React.FC<RadioType> = ({id, label,value, name, defaultChecked}) => {
	return(
		<div className="flex items-center mb-4">
			<input id={String(id)} type="radio" value={value} name={name} className="radioStyle radioAccent" defaultChecked={defaultChecked}/>
			<label htmlFor={String(id)} className="ms-2 text-sm font-medium">{label}</label>
		</div>
	)
}

export default RadioBox;
