import React, {useState} from 'react';
import KvImage from '@/images/kv.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import {MenuList} from "@/react/app/mainApp/components/menu";

const Header = () => {

    const [hamburgerState, setHamburgerState] = useState(false)
    const hamburgerMenuIcon = hamburgerState ? <MdClose size={'36px'}/> : <RxHamburgerMenu size={'36px'}/>;
    const hamburgerMenuPosition = hamburgerState ? 'translate-x-0' : 'translate-x-[100%]';

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
                    <MenuList/>
                </ul>
            </div>
        </>
    );
};

export default Header;
