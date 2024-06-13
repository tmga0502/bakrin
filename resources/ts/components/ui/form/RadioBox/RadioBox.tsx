import React from 'react';
import { RadioBoxType } from './RadioBox.type';

const RadioBox:React.FC<RadioBoxType> = ({id, label,value, name, defaultChecked}) => {
	return(
		<div className="flex items-center mb-4">
			<input id={String(id)} type="radio" value={value} name={name} className="radioStyle radioAccent" defaultChecked={defaultChecked}/>
			<label htmlFor={String(id)} className="ms-2 text-sm font-medium">{label}</label>
		</div>
	)
}

export default RadioBox;
