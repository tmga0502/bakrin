import React, {useState} from 'react';
import KvImage from '@/images/kv.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import MenuList from "@/react/app/mainApp/components/layouts/MenuList/MenuList";

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
						<MenuList/>
					</ul>
				</div>
			)}
        </>
    );
};

export default Header;
