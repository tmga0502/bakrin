import React from 'react';
import {Link} from "react-router-dom";
import { ItemGridType, _type, SearchItemListType } from './_type';

const ItemGrid: React.FC<ItemGridType> = ({children}) => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
			{children}
		</div>
	);
};

const TopItemList: React.FC<_type> = ({title, moreLink, children}) => {
	return (
		<div className="mb-14">
			<div className="flex justify-between mb-3">
				<p className="flex items-center justify-center before:content-[''] before:w-[20px] before:border-t-[14px] before:border-solid before:border-mainGreen before:mr-2">
					{title}
				</p>

				<Link to={moreLink} className="hover:opacity-80">
					<p className="flex items-center after:content-['>'] after:ml-2">
						もっと見る
					</p>
				</Link>
			</div>
			<ItemGrid>
				{children}
			</ItemGrid>
		</div>
	);
};

const SearchItemList: React.FC<SearchItemListType> = ({children}) => {
	return (
		<div className="mb-14">
			<ItemGrid>
				{children}
			</ItemGrid>
		</div>
	);
};

export {
	TopItemList,
	SearchItemList,
};
