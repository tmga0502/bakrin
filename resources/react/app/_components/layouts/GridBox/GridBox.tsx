import React from 'react';
import {GridBoxType} from "./GridBox.type";
import {GridStyle} from './GridBox.styles'

const GridBox: React.FC<GridBoxType> = ({children}) => {
	return (
		<div css={GridStyle}>{children}</div>
	);
};

export default GridBox;
