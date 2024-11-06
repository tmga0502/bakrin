import React from 'react';
import {TdType} from "./Td.type";
import {Style} from './Td.styles';

const Td: React.FC<TdType> = ({text, heading}) => {
	return (
		<td css={Style(heading)}>{text}</td>
	);
};

export default Td;
