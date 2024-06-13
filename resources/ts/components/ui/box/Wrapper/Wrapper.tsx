import React from 'react';
import { WrapperType } from './Wrapper.type';

const Wrapper: React.FC<WrapperType> = ({children}) => {
	return(
		<div className="flex-col min-h-screen min-w-80">
			{children}
		</div>
	)
}

export default Wrapper;
