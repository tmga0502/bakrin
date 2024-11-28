import React from 'react';
import {Link} from "react-router-dom";

type ListPanelType = {
	link: string,
	thumbnail: string,
	itemName: string,
	userName: string,
	date: string,
	status?: number,
}

const ListPanel: React.FC<ListPanelType> = ({link, thumbnail, itemName, userName, date}) => {
	return (
		<Link to={link} className={'flex items-center gap-4 max-w-[500px] min-w-[350px] mx-auto mb-4 p-4 border border-bakGray rounded-md bg-white shadow-md'}>
			<div className={'w-32 h-32'}>
				<img src={thumbnail} className={'w-full h-full object-cover'} alt={itemName}/>
			</div>
			<div className={'w-[calc(100%_-_128px_-_1rem)]'}>
				<p className={'mb-2'}>{itemName}</p>
				<p className={'text-right mb-4'}>{userName}</p>
				<p className={'text-right text-xs'}>申請日：{date}</p>
			</div>
		</Link>
	);
};

export default ListPanel;
