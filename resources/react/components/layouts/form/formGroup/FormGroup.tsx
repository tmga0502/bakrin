import React from 'react';
import {Container} from "@/react/components/layouts/form/formGroup/FormGroup.css";
import {FormGroupType} from "@/react/components/layouts/form/formGroup/FormGroup.type";

const FormGroup = ({children}: FormGroupType) => {
	return (
		<div className={Container}>{children}</div>
	);
};

export default FormGroup;
