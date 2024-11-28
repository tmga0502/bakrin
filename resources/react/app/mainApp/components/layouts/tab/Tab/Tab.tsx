import React, { FC } from 'react';
import { tv } from 'tailwind-variants';

type TabType  = {
	mode:string,
	setMode: React.Dispatch<any>,
	tabMenu: string[],
}

const TabTv = tv({
	base: 'border border-bakGray rounded-t-md px-4 py-2 hover:cursor-pointer hover:opacity-80',
	variants:{
		active:{
			true : 'bg-mainGreen text-white',
			false: 'bg-white text-bakDark',
		}
	}
})

const Tab: FC<TabType> = ({mode, setMode, tabMenu}) => {
	return (
		<div className={'flex border-b border-b-bakGray gap-4 mb-6'}>
			{tabMenu.map((menu,  index)=> (
				<div className={TabTv({active:mode === menu})} onClick={() => {setMode(menu)}} key={index}>
					{menu}
				</div>
			))}
		</div>
	);
};

export default Tab;
