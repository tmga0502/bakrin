import React from 'react';
import {FormGroupType} from "./FormGroup.type";
import {Container} from "./FormGroup.styles";

const FormGroup = ({children}: FormGroupType) => {
	return (
		<div css={Container}>{children}</div>
	);
};

export default FormGroup;
