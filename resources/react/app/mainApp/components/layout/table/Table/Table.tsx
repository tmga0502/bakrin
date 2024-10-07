import React from 'react';
import {TableType} from "./Table.type";
import {Style} from './Table.styles';

const Table: React.FC<TableType> = ({children}) => {
	return (
		<table css={Style}>
			{children}
		</table>
	);
};

export default Table;
