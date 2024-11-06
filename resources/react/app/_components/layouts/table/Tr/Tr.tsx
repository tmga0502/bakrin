import React from 'react';
import {TrType} from "./Tr.type";
import {Style} from './Tr.styles';

const Tr: React.FC<TrType> = ({children}) => {
	return (
		<tr css={Style}>
			{children}
		</tr>
	);
};

export default Tr;
