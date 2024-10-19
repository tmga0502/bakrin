import React from 'react';
import Logo from '@/images/logo.png';
import {Link} from "react-router-dom";
import {LogoBox, LogoStyle, Wrapper, ListStyle, IconStyle, ItemBox, TitleStyle} from './Sidebar.styles';
import {Menu} from '@/react/app/adminApp/components/constants/MenuList'

const Sidebar = () => {
	return (
        <div css={Wrapper}>
            <div css={LogoBox}>
                <Link to={'/admin'}>
                    <img src={Logo} css={LogoStyle} alt="logo" />
                </Link>
            </div>
            <ul>
				{Menu.map((item, index) => (
					<li css={ListStyle} key={index}>
						<Link to={item.link} css={ItemBox}>
							<span css={IconStyle}>
								{item.icon}
							</span>
							<span css={TitleStyle}>{item.title}</span>
						</Link>
					</li>
				))}
            </ul>
        </div>
    );
};

export default Sidebar;
