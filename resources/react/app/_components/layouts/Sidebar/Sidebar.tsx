import React from 'react';
import Logo from '@/images/logo.png'
import {IoSettingsOutline} from "react-icons/io5";
import {FaRegUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import SideMenuButton from "@/react/app/mainApp/components/elements/button/SideMenuButton/SideMenuButton";
import MenuList from "@/react/app/mainApp/components/layouts/MenuList/MenuList";

const Sidebar = () => {
	return (
        <div className={'hidden md:block md:w-[200px] md:bg-white md:mt-[-120px] z-[50]'}>
            <div className={'flex text-center w-full h-[120px] p-4'}>
                <Link to={'/'}>
                    <img src={Logo} className={'w-full'} alt="logo" />
                </Link>
            </div>
            <div className={'flex gap-1 mt-4 mb-2'}>
				<Link to={'/myitem'} className={'inline-block w-1/2'}>
					<SideMenuButton icon={<IoSettingsOutline size={'24px'}/>} title={'管理ページ'}/>
				</Link>
				<Link to={'/mypage'} className={'inline-block w-1/2'}>
					<SideMenuButton icon={<FaRegUser size={'24px'}/>} title={'マイページ'}/>
				</Link>
            </div>
            <ul>
                <MenuList/>
            </ul>
        </div>
    );
};

export default Sidebar;
