import React from 'react';
import Logo from '@/images/logo.png'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import {Menu} from "@/ts/appMain/constant/menu/Menu";
import Button from "@/ts/appMain/components/_common/sidebar/components/button/Button";
import {MenuType} from "@/ts/appMain/constant/menu/type";
import List from "@/ts/appMain/components/_common/sidebar/components/list/List";
import {Link} from "react-router-dom";

const Sidebar = () => {
    const menus = Menu
    return (
        <div className="hidden w-[250px] bg-white -mt-[120px] md:block z-50">
            <div className="w-full p-4 h-[120px] flex items-center">
                <Link to={'/'}>
                    <img src={Logo} className="w-100" alt="logo" />
                </Link>
            </div>
            <div className="flex gap-1 mb-2">
                <Button icon={<IoSettingsOutline size={'24px'}/>} title={'管理ページ'} link={'/myitem'}/>
                <Button icon={<FaRegUser size={'24px'}/>} title={'マイページ'} link={'/mypage'}/>
            </div>
            <ul className="mt-4">
                {menus.map((menu: MenuType, index:number) => (
                    <List key={index} icon={menu.icon} title={menu.title} link={menu.link} bg={menu.bg}/>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
