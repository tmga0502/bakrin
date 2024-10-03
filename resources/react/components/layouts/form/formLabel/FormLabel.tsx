import React from 'react';
import {FormLabelType} from "@/react/components/layouts/form/formLabel/FormLabel.type";
import {FormLabelStyle} from "@/react/components/layouts/form/formLabel/FormLabel.css";

const FormLabel = ({text, htmlFor}: FormLabelType) => {
	return (
		<label className={FormLabelStyle} htmlFor={htmlFor}>
			{text}
		</label>
	);
};

export default FormLabel;
