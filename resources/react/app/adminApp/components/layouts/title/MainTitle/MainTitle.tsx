import React from 'react';
import {MainTitleType} from "./MainTitle.type";
import {Wrapper} from './MainTitle.styles';

const MainTitle: React.FC<MainTitleType> = ({title}) => {
	return (
		<div css={Wrapper}>
			{title}
		</div>
	);
};

export default MainTitle;
