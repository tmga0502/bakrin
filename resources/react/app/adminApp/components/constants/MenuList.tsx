import React from "react";
import { MenuType } from "./types/type";
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

export const Menu: MenuType[] = [
	{
		icon: <MdDashboard />,
		title: 'Dashboard',
		link: '/admin',
	},
	{
		icon: <IoIosNotifications />,
		title: 'お知らせ',
		link: '/admin/notice',
	},
	{
		icon: <IoSettingsSharp />,
		title: '設定',
		link: '/admin/setting',
	},

]
