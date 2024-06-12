import React from 'react';
import {SideMenuButtonType} from "@/ts/components/ui/button/_type";
import {Link} from "react-router-dom";

const SideMenuButton = (props: SideMenuButtonType) => {
	return (
		<Link to={props.link} className="w-1/2 h-[60px] bg-gray-500 px-2 py-2 hover:opacity-80">
			<div className="text-white text-center h-1/2 leading-[30px] flex justify-center items-center">
				{props.icon}
			</div>
			<div className="text-white text-center h-1/2 leading-[30px]">
				{props.title}
			</div>
		</Link>
	);
};

export default SideMenuButton;
