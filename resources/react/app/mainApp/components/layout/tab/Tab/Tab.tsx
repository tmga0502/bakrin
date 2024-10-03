import React, { FC } from 'react';
import { TabType } from './Tab.type';
import {Container, TabItem} from './Tab.css';

const Tab: FC<TabType> = ({mode, setMode, tabMenu}) => {
	return (
		<div className={Container}>
			{tabMenu.map((menu,  index)=> (
				<div
					className={TabItem({active: mode === menu})}
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

export default Tab;
