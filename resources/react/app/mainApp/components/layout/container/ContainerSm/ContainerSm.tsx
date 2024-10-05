import React from 'react';
import {ContainerSmType} from "./ContainerSm.type";
import {ContainerStyle} from './ContainerSm.styles';

const ContainerSm: React.FC<ContainerSmType> = ({children}) => {
	return (
		<div css={ContainerStyle}>
			{children}
		</div>
	);
};

export default ContainerSm;
