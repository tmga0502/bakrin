import React from "react";
import {FaRegCircle, FaSearch} from "react-icons/fa";
import { MenuType } from "./index.type";

const Menu: MenuType[] = [
	{
		icon: <FaSearch />,
		title: 'プランから探す',
		link: '/searchPlan',
		bg: 'gray'
	},
	{
		icon: <FaSearch />,
		title: 'カテゴリーから探す',
		link: '/searchItemCategory',
		bg: 'gray'
	},
	{
		icon: <FaSearch />,
		title: '生産者から探す',
		link: '/searchUser',
		bg: 'gray'
	},
	{
		icon: <FaRegCircle />,
		title: '申請依頼',
		link: '/receiveRequest',
		bg: 'white'
	},
	{
		icon: <FaRegCircle />,
		title: '取引',
		link: '/trade',
		bg: 'white'
	},
	{
		icon: <FaRegCircle />,
		title: 'メッセージ',
		link: '/message',
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
