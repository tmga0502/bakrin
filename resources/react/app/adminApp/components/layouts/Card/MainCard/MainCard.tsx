import React from 'react';
import {MainCardType} from "./MainCard.type";
import {Wrapper, TitleStyle, ContentsStyle} from './MainCard.styles';

const MainCard: React.FC<MainCardType> = ({children, title}) => {
	return (
		<div css={Wrapper}>
			{title !== undefined && (
				<div css={TitleStyle}>{title}</div>
			)}
			<div css={ContentsStyle}>
				{children}
			</div>
		</div>
	);
};

export default MainCard;
