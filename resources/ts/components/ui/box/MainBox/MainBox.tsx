import React from 'react';
import { MainBoxType } from './MainBox.type';

const MainBox: React.FC<MainBoxType> = ({children}) => {
	return (
		<div className="w-full md:w-[calc(100% - 250px)] p-4 mb-24">
			{children}
		</div>
	);
};

export default MainBox;
