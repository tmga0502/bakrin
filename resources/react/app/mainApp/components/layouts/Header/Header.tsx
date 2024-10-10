import React, {useState} from 'react';
import KvImage from '@/images/kv.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import {BackgroundImage, HamburgerBox, HamburgerUl, MenuWrapper, Wrapper} from "./Header.styles";
import MenuList from "@/react/app/mainApp/components/layouts/MenuList/MenuList";

const Header = () => {

    const [hamburgerState, setHamburgerState] = useState(false)
    const hamburgerMenuIcon = hamburgerState ? <MdClose size={'36px'}/> : <RxHamburgerMenu size={'36px'}/>;

    const handleHamburger = () => {
        setHamburgerState(!hamburgerState);
    }

    return (
        <>
            <div css={Wrapper}>
                <img src={KvImage} css={BackgroundImage} alt="header kv"/>
                <div css={HamburgerBox} onClick={handleHamburger}>
                    {hamburgerMenuIcon}
                </div>
            </div>

			{hamburgerState && (
				<div css={MenuWrapper}>
					<ul css={HamburgerUl}>
						<MenuList/>
					</ul>
				</div>
			)}
        </>
    );
};

export default Header;
