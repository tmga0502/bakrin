import React from 'react';
import {Link} from "react-router-dom";
import { Menu } from './constants';
import { MenuType } from './constants/index.type';
import {LinkStyle, LiStyle, SpanStyle} from "./MenuList.styles";

const MenuList = () => {
	return (
		<>
			{Menu.map((menu: MenuType, index:number) => (
				<Link to={menu.link} css={LinkStyle} key={index}>
					<li css={LiStyle(menu.bg)}>
						{menu.icon}<span css={SpanStyle}>{menu.title}</span>
					</li>
				</Link>
			))}
		</>
	)
};

export default MenuList;
