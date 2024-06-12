import React from 'react';
import {Link} from "react-router-dom";
import {FaRegCircle, FaSearch} from "react-icons/fa";
import { MenuType } from './type';

const Menu: MenuType[] = [
	{
		icon: <FaSearch />,
		title: 'カテゴリーから探す',
		link: '',
		bg: 'gray-200'
	},
	{
		icon: <FaSearch />,
		title: 'プランから探す',
		link: '',
		bg: 'gray-200'
	},
	{
		icon: <FaSearch />,
		title: '生産者から探す',
		link: '',
		bg: 'gray-200'
	},
	{
		icon: <FaSearch />,
		title: '欲しいものから探す',
		link: '',
		bg: 'gray-200'
	},
	{
		icon: <FaRegCircle />,
		title: '申請依頼',
		link: '/receiveApplication',
		bg: 'white'
	},{
		icon: <FaRegCircle />,
		title: '取引',
		link: '/trade',
		bg: 'white'
	},
	{
		icon: <FaRegCircle />,
		title: 'お知らせ',
		link: '/info',
		bg: 'white'
	},
	{
		icon: <FaRegCircle />,
		title: 'お問い合わせ',
		link: '/contact',
		bg: 'white'
	},
	{
		icon: <FaRegCircle />,
		title: 'ご利用ガイド',
		link: '',
		bg: 'white'
	},

]

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
