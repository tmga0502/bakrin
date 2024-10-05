import React from 'react';
import {ContainerMdType} from "./ContainerMd.type";
import {ContainerStyle} from './ContainerMd.styles';

const ContainerMd: React.FC<ContainerMdType> = ({children}) => {
	return (
		<div css={ContainerStyle}>
			{children}
		</div>
	);
};

export default ContainerMd;
