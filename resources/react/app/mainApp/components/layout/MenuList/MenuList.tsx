import React from 'react';
import {Link} from "react-router-dom";
import { Menu } from './constants';
import { MenuType } from './constants/index.type';
import {LinkStyle, LiStyle, SpanStyle} from "./MenuList.css";

const MenuList = () => {
	return (
		<>
			{Menu.map((menu: MenuType, index:number) => (
				<Link to={menu.link} className={LinkStyle} key={index}>
					<li className={LiStyle({color: menu.bg})}>
						{menu.icon}<span className={SpanStyle}>{menu.title}</span>
					</li>
				</Link>
			))}
		</>
	)
};

export default MenuList;
