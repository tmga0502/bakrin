import React from 'react';
import {Link} from "react-router-dom";
import { Menu } from '../constants';
import { MenuType } from '../constants/index.type';

const MenuList = () => {
	return (
		<>
			{Menu.map((menu: MenuType, index:number) => (
				<Link to={menu.link} className="hover:opacity-80" key={index}>
					<li className={`flex items-center bg-${menu.bg } py-3 px-1 mb-1`}>
						{menu.icon}<span className="ml-2">{menu.title}</span>
					</li>
				</Link>
			))}
		</>
	)
};

export default MenuList;
