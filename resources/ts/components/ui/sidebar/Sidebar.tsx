import React from 'react';
import Logo from '@/images/logo.png'
import {IoSettingsOutline} from "react-icons/io5";
import {FaRegUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import { SideMenuButton } from '../button';
import {MenuList} from "@/ts/components/ui/menu";

const Sidebar = () => {
	return (
        <div className="hidden w-[250px] bg-white -mt-[120px] md:block z-50">
            <div className="w-full p-4 h-[120px] flex items-center">
                <Link to={'/'}>
                    <img src={Logo} className="w-100" alt="logo" />
                </Link>
            </div>
            <div className="flex gap-1 mb-2">
                <SideMenuButton icon={<IoSettingsOutline size={'24px'}/>} title={'管理ページ'} link={'/myitem'}/>
                <SideMenuButton icon={<FaRegUser size={'24px'}/>} title={'マイページ'} link={'/mypage'}/>
            </div>
            <ul className="mt-4">
                <MenuList/>
            </ul>
        </div>
    );
};

export default Sidebar;
