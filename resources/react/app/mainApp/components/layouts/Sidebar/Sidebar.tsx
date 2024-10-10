import React from 'react';
import Logo from '@/images/logo.png'
import {IoSettingsOutline} from "react-icons/io5";
import {FaRegUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import {ButtonBox, LinkBox, LogoBox, LogoStyle, Wrapper} from './Sidebar.styles';
import SideMenuButton from "@/react/app/mainApp/components/elements/button/SideMenuButton/SideMenuButton";
import MenuList from "@/react/app/mainApp/components/layouts/MenuList/MenuList";

const Sidebar = () => {
	return (
        <div css={Wrapper}>
            <div css={LogoBox}>
                <Link to={'/'}>
                    <img src={Logo} css={LogoStyle} alt="logo" />
                </Link>
            </div>
            <div css={ButtonBox}>
				<Link to={'/myitem'} css={LinkBox}>
					<SideMenuButton icon={<IoSettingsOutline size={'24px'}/>} title={'管理ページ'}/>
				</Link>
				<Link to={'/mypage'} css={LinkBox}>
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
