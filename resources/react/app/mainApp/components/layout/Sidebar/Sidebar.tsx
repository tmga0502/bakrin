import React from 'react';
import Logo from '@/images/logo.png'
import {IoSettingsOutline} from "react-icons/io5";
import {FaRegUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import {ButtonBox, LinkBox, LogoBox, LogoStyle, Wrapper} from './Sidebar.css';
import SideMenuButton from "@/react/app/mainApp/components/elements/button/SideMenuButton/SideMenuButton";
import MenuList from "@/react/app/mainApp/components/layout/MenuList/MenuList";

const Sidebar = () => {
	return (
        <div className={Wrapper}>
            <div className={LogoBox}>
                <Link to={'/'}>
                    <img src={Logo} className={LogoStyle} alt="logo" />
                </Link>
            </div>
            <div className={ButtonBox}>
				<Link to={'/myitem'} className={LinkBox}>
					<SideMenuButton icon={<IoSettingsOutline size={'24px'}/>} title={'管理ページ'}/>
				</Link>
				<Link to={'/mypage'} className={LinkBox}>
					<SideMenuButton icon={<FaRegUser size={'24px'}/>} title={'マイページ'}/>
				</Link>
            </div>
            <ul className="mt-4">
                <MenuList/>
            </ul>
        </div>
    );
};

export default Sidebar;
