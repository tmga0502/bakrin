import React from 'react';
import Logo from '@/images/logo.png';
import {Link} from "react-router-dom";
import {Menu} from '@/react/app/adminApp/components/constants/MenuList'

const Sidebar = () => {
	return (
        <div className={'w-[60px] h-full min-h-screen bg-mainGreen z-50 md:w-[150px]'}>
            <div className={'hidden md:block md:items-center md:w-full md:p-2'}>
                <Link to={'/admin'}>
                    <img src={Logo} className={'w-full rounded-md my-2'} alt="logo" />
                </Link>
            </div>
            <ul>
				{Menu.map((item, index) => (
					<li className={'py-3'} key={index}>
						<Link to={item.link} className={'text-white flex justify-center md:justify-start md:items-center md:gap-2 md:px-2 hover:text-white hover:opacity-80'}>
							<span className={'text-2xl block text-center md:text-lg md:flex md:items-center'}>
								{item.icon}
							</span>
							<span className={'hidden md:block'}>{item.title}</span>
						</Link>
					</li>
				))}
            </ul>
        </div>
    );
};

export default Sidebar;
