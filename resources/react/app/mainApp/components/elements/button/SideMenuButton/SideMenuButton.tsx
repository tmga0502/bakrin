import React from 'react';
import {SideMenuButtonType} from "./SideMenuButton.type";
import {Box, IconBox, TextBox} from "./SideMenuButton.css";

const SideMenuButton: React.FC<SideMenuButtonType> = ({icon, title}) => {
	return (
		<div className={Box}>
			<div className={IconBox}>
				{icon}
			</div>
			<div className={TextBox}>
				{title}
			</div>
		</div>
	);
};

export default SideMenuButton;
