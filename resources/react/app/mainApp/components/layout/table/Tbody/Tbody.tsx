import React from 'react';
import {TbodyType} from "./Tbody.type";

const Tbody: React.FC<TbodyType> = ({children}) => {
	return (
		<tbody>
			{children}
		</tbody>
	);
};

export default Tbody;
