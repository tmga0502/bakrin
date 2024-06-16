import React from "react";
import {FaRegCircle, FaSearch} from "react-icons/fa";
import { MenuType } from "./index.type";

const Menu: MenuType[] = [
	{
		icon: <FaSearch />,
		title: 'カテゴリーから探す',
		link: '/searchItemCategory',
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
		link: '/searchProducer',
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

export {
	Menu,
}
