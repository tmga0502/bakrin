import React from 'react';
import {SideMenuButtonType} from "./SideMenuButton.type";
import {Box, IconBox, TextBox} from "./SideMenuButton.styles";

const SideMenuButton: React.FC<SideMenuButtonType> = ({icon, title}) => {
	return (
		<div css={Box}>
			<div css={IconBox}>
				{icon}
			</div>
			<div css={TextBox}>
				{title}
			</div>
		</div>
	);
};

export default SideMenuButton;
