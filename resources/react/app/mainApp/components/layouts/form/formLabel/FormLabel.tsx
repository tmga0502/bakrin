import React from 'react';
import {FormLabelType} from "./FormLabel.type";
import {FormLabelStyle} from "./FormLabel.styles";

const FormLabel = ({text, htmlFor}: FormLabelType) => {
	return (
		<label css={FormLabelStyle} htmlFor={htmlFor}>
			{text}
		</label>
	);
};

export default FormLabel;
