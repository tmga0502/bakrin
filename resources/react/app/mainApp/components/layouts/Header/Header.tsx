import React, {useState} from 'react';
import KvImage from '@/images/kv.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import MenuList from "@/react/app/mainApp/components/layouts/MenuList/MenuList";
import {Link} from "react-router-dom";
import {IoSettingsOutline} from "react-icons/io5";
import {FaRegUser} from "react-icons/fa";

const Header = () => {

    const [hamburgerState, setHamburgerState] = useState(false)
    const hamburgerMenuIcon = hamburgerState ? <MdClose size={'36px'}/> : <RxHamburgerMenu size={'36px'}/>;

    const handleHamburger = () => {
        setHamburgerState(!hamburgerState);
    }

    return (
        <>
            <div className={'relative w-screen h-[60px] md:h-[120px]'}>
                <img src={KvImage} className={'w-full h-full object-cover'} alt="header kv"/>
                <div className={'absolute w-[36px] h-[36px] top-[12px] right-[12px] z-[9901] hover:cursor-pointer md:hidden'} onClick={handleHamburger}>
                    {hamburgerMenuIcon}
                </div>
            </div>

			{hamburgerState && (
				<div className={'fixed w-[200px] h-full bg-white top-0 right-0 z-[9900]'}>
					<ul className={'mt-[60px]'}>
						<Link to={'/myitem'} className={'hover:opacity-80'}>
							<li className={'flex items-center px-2 py-3 bg-white'}>
								<IoSettingsOutline/><span className={'ml-2'}>{'管理ページ'}</span>
							</li>
						</Link>
						<Link to={'/mypage'} className={'hover:opacity-80'}>
							<li className={'flex items-center px-2 py-3 bg-white'}>
								<FaRegUser/><span className={'ml-2'}>{'マイページ'}</span>
							</li>
						</Link>
						<MenuList/>
					</ul>
				</div>
			)}
        </>
    );
};

export default Header;
