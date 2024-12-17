import React from 'react';

type FormLabelType = {
	text   : string,
	htmlFor: string,
}

const FormLabel = ({text, htmlFor}: FormLabelType) => {
	return (
		<label className={'inline-block text-xs font-bold mb-1'} htmlFor={htmlFor}>
			{text}
		</label>
	);
};

export default FormLabel;
