import React from "react";
import { MenuType } from "./types/type";
import { MdDashboard } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

export const Menu: Array<MenuType> = [
	{
		icon: <MdDashboard />,
		title: 'Dashboard',
		link: '/agent',
	},
	{
		icon: <GrMoney />,
		title: '出金依頼',
		link: '/agent/withdraw_request',
	},
	{
		icon: <FaRegUser />,
		title: 'マイページ',
		link: '/agent/my_page',
	},

]
