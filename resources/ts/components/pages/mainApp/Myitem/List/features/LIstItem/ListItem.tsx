import React from 'react';
import {Link} from "react-router-dom";
import {MainButton} from "@/ts/components/ui/button";
import { ListItemType } from './ListItem.type';

const ListItem: React.FC<ListItemType> = ({data}) => {
	return (
		<div className="flex items-center justify-between gap-6 bg-white border rounded-sm shadow p-4 mb-2">
			<div className="w-16 h-16">
				<img src={data.thumbnail} className="w-full h-full object-cover" alt="item img"/>
			</div>
			<div className="flex items-center justify-between w-[calc(100%_-_156px)]">
				<p>{data.name}</p>
				<div className="flex items-center justify-between">
					<p className="ml-2">【{data.plan.name}】</p>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<Link to={data.uuid} className={'block whitespace-nowrap'}>
					<MainButton value={'詳細'} color={'mainGreen'} type={'button'} size={'sm'}/>
				</Link>
			</div>
		</div>
	);
};

export default ListItem;
