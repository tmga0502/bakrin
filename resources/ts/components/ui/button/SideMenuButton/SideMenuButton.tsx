import React from 'react';
import {Link} from "react-router-dom";
import { SideMenuButtonType } from './SideMenuButton.type';

const SideMenuButton: React.FC<SideMenuButtonType> = ({link, icon, title}) => {
	return (
		<Link to={link} className="w-1/2 h-[60px] bg-gray-500 px-2 py-2 hover:opacity-80">
			<div className="text-white text-center h-1/2 leading-[30px] flex justify-center items-center">
				{icon}
			</div>
			<div className="text-white text-center h-1/2 leading-[30px]">
				{title}
			</div>
		</Link>
	);
};

export default SideMenuButton;
