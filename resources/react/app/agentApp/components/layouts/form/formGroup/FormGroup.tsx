import React, {ReactNode} from 'react';

const FormGroup:React.FC<{ children: ReactNode }> = ({children}) => {
	return (
		<div className={'mb-6'}>{children}</div>
	);
};

export default FormGroup;
