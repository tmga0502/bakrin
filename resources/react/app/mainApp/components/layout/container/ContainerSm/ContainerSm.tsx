import React from 'react';
import {ContainerSmType} from "./ContainerSm.type";
import {ContainerStyle} from './ContainerSm.css';

const ContainerSm: React.FC<ContainerSmType> = ({children}) => {
	return (
		<div className={ContainerStyle}>
			{children}
		</div>
	);
};

export default ContainerSm;
