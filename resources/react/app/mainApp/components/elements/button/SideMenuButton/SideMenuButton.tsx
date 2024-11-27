import React from 'react';

type SideMenuButtonType = {
	icon: React.ReactNode,
	title: string,
}

const SideMenuButton: React.FC<SideMenuButtonType> = ({icon, title}) => {
	return (
		<div className={'w-full h-[60px] bg-bakDark p-2 hover:opacity-80'}>
			<div className={'text-white text-center h-1/2 leading-8 flex justify-center items-center'}>
				{icon}
			</div>
			<div className={'text-white text-center h-1/2 leading-7'}>
				{title}
			</div>
		</div>
	);
};

export default SideMenuButton;
