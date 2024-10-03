import React, {useState} from 'react';
import KvImage from '@/images/kv.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import {BackgroundImage, HamburgerBox, HamburgerUl, MenuWrapper, Wrapper} from "./Header.css";
import MenuList from "@/react/app/mainApp/components/layout/MenuList/MenuList";

const Header = () => {

    const [hamburgerState, setHamburgerState] = useState(false)
    const hamburgerMenuIcon = hamburgerState ? <MdClose size={'36px'}/> : <RxHamburgerMenu size={'36px'}/>;

    const handleHamburger = () => {
        setHamburgerState(!hamburgerState);
    }

    return (
        <>
            <div className={Wrapper}>
                <img src={KvImage} className={BackgroundImage} alt="header kv"/>
                <div className={HamburgerBox} onClick={handleHamburger}>
                    {hamburgerMenuIcon}
                </div>
            </div>

			{hamburgerState && (
				<div className={MenuWrapper}>
					<ul className={HamburgerUl}>
						<MenuList/>
					</ul>
				</div>
			)}
        </>
    );
};

export default Header;
