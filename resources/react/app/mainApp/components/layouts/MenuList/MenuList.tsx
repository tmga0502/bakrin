import React from 'react';
import {Link} from "react-router-dom";
import { Menu } from './constants';
import { MenuType } from './constants/index.type';
import {tv} from "tailwind-variants";

const MenuListTv = tv({
	base: 'flex items-center px-2 py-3',
	variants:{
		color:{
			white: 'bg-white',
			gray: 'bg-bakGray border-b border-b-white',
		}
	}
})

const MenuList = () => {
	return (
		<>
			{Menu.map((menu: MenuType, index:number) => (
				<Link to={menu.link} className={'hover:opacity-80'} key={index}>
					<li className={MenuListTv({color: menu.bg})}>
						{menu.icon}<span className={'ml-2'}>{menu.title}</span>
					</li>
				</Link>
			))}
		</>
	)
};

export default MenuList;
