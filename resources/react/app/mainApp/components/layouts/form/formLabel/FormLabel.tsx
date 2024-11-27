import React from 'react';

type FormLabelType = {
	text   : string,
	htmlFor: string,
}


const FormLabel:React.FC<FormLabelType>= ({text, htmlFor}) => {
	return (
		<label className={'inline-block text-xs font-bold mb-1'} htmlFor={htmlFor}>
			{text}
		</label>
	);
};

export default FormLabel;
