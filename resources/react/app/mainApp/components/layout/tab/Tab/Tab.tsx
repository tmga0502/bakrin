import React, { FC } from 'react';
import { TabType } from './Tab.type';
import {Container, TabItem} from './Tab.styles';

const Tab: FC<TabType> = ({mode, setMode, tabMenu}) => {
	return (
		<div css={Container}>
			{tabMenu.map((menu,  index)=> (
				<div
					css={TabItem( mode === menu)}
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
