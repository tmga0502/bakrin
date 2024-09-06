import React from 'react';
import {GridBoxType} from "./GridBox.type";

const GridBox: React.FC<GridBoxType> = ({children}) => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
			{children}
		</div>
	);
};

export default GridBox;
