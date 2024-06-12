import React, { FC } from 'react';
import { TabType } from './Tab.type';

const _type: FC<TabType> = ({mode, setMode, tabMenu}) => {
	const BaseClass = "border rounded-tl-xl rounded-tr-xl px-4 py-2 hover:cursor-pointer hover:opacity-80"
	const normalClass = `${BaseClass} bg-white`
	const activeClass = `${BaseClass} bg-mainGreen text-white`
	return (
		<div className="border-b flex gap-4 mb-6">
			{tabMenu.map((menu,  index)=> (
				<div
					className={mode === menu ? activeClass : normalClass}
					onClick={() => {
						setMode(menu)
					}}
					key={index}
				>
					{menu}
				</div>
			))}
		</div>
	);
};

export default _type;
