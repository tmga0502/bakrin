import React from 'react';
import {FormLabelType} from "@/ts/components/ui/form/_type";
import Budge from "@/ts/components/ui/budge/Budge";

const FormLabel: React.FC<FormLabelType> = ({label, htmlFor, message, required}) => {
	return (
		<label className="block text-left text-sm font-bold mb-2" htmlFor={htmlFor}>
			{required ? (<Budge value={'必須'} color={'danger'}/>) : null}
			{label}
			{message ? (
				<span className="ml-4 text-red-500 text-xs">{message}</span>
			) : null}
		</label>
	)
}
export default FormLabel;
