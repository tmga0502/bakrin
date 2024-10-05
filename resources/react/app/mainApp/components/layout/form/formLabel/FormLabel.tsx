import React from 'react';
import {FormLabelType} from "./FormLabel.type";
import {FormLabelStyle} from "./FormLabel.css";

const FormLabel = ({text, htmlFor}: FormLabelType) => {
	return (
		<label className={FormLabelStyle} htmlFor={htmlFor}>
			{text}
		</label>
	);
};

export default FormLabel;
