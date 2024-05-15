import React, {useState} from 'react';
import KvImage from '@/images/kv.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import {Menu} from "@/ts/appMain/constant/menu/Menu";
import {MenuType} from "@/ts/appMain/constant/menu/type";
import List from "@/ts/appMain/components/_common/sidebar/components/list/List";

const Header = () => {

    const [hamburgerState, setHamburgerState] = useState(false)
    const hamburgerMenuIcon = hamburgerState ? <MdClose size={'36px'}/> : <RxHamburgerMenu size={'36px'}/>;
    const hamburgerMenuPosition = hamburgerState ? 'translate-x-0' : 'translate-x-[100%]';
    const hamburgerMenuDisplay = hamburgerState ? 'block' : 'hidden';
    const menus = Menu

    const handleHamburger = () => {
        setHamburgerState(!hamburgerState);
    }

    return (
        <>
            <div className="w-screen h-[60px] md:h-[120px] relative">
                <img src={KvImage} className="w-full h-full object-cover" alt="header kv"/>
                <div className="w-[36px] h-[36px] absolute top-[12px] right-[12px] z-[500] md:hidden" onClick={handleHamburger}>
                    {hamburgerMenuIcon}
                </div>
            </div>

            <div className={`fixed w-[200px] h-full bg-white top-0 right-0 ${hamburgerMenuPosition} transition duration-500 z-[100]`}>
                <ul className="mt-[60px]">
                    {menus.map((menu: MenuType, index:number) => (
                        <List key={index} icon={menu.icon} title={menu.title} link={menu.link} bg={menu.bg}/>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Header;
