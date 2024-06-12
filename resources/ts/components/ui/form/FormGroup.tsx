import React from 'react';
import {FormGroupType} from "@/ts/components/ui/form/_type";

const FormGroup: React.FC<FormGroupType> = ({children}) => {
	return(
		<div className="mb-6 flex-1">{children}</div>
	)
}

export default FormGroup;
