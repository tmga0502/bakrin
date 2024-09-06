import React from 'react';
import { FormGroupType } from './FormGroup.type';

const FormGroup: React.FC<FormGroupType> = ({children}) => {
	return(
		<div className="mb-6 flex-1">{children}</div>
	)
}

export default FormGroup;
