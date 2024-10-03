import React from 'react';
import {GridBoxType} from "./GridBox.type";
import {GridStyle} from './GridBox.css'

const GridBox: React.FC<GridBoxType> = ({children}) => {
	return (
		<div className={GridStyle}>{children}</div>
	);
};

export default GridBox;
