import React from 'react';
import {ContainerMdType} from "./ContainerMd.type";
import {ContainerStyle} from './ContainerMd.css';

const ContainerMd: React.FC<ContainerMdType> = ({children}) => {
	return (
		<div className={ContainerStyle}>
			{children}
		</div>
	);
};

export default ContainerMd;
