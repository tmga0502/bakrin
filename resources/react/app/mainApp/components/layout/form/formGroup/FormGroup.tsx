import React from 'react';
import {Container} from "./FormGroup.css";
import {FormGroupType} from "./FormGroup.type";

const FormGroup = ({children}: FormGroupType) => {
	return (
		<div className={Container}>{children}</div>
	);
};

export default FormGroup;
