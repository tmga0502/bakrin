import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {Menu} from "@/react/app/adminApp/components/constants/MenuList";
import {Link} from "react-router-dom";

const Hamburger = () => {
	const [openMenu, setOpenMenu] = React.useState(false);

	const handleOpenMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<>
			<div className={'block sm:hidden'}>
				<div className={'px-4 py-2'}>
					<div className={'flex justify-end hover:cursor-pointer'} onClick={handleOpenMenu}>
						<GiHamburgerMenu className={'text-2xl hover:opacity-80'}/>
					</div>
				</div>
			</div>

			{openMenu && (
				<div className={'fixed top-0 right-0 w-48 h-screen bg-white shadow-lg'}>
					<div className={'px-4 py-2 mt-4'}>
						<div className={'flex justify-end hover:cursor-pointer'} onClick={handleOpenMenu}>
							<MdClose className={'text-3xl hover:opacity-80'}/>
						</div>

						<ul>
							{Menu.map((item, index) => (
								<li className={'py-3'} key={index}>
									<Link to={item.link} className={'flex justify-start items-center gap-2 px-2 hover:opacity-80'}>
										<span className={'text-center text-lg flex items-center'}>
											{item.icon}
										</span>
										<span>{item.title}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default Hamburger;
