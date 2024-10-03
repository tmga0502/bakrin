import React from 'react';
import {Link} from "react-router-dom";
import { TradeItemPanelType } from './_type';

const TradeItemPanel: React.FC<TradeItemPanelType> = ({link, thumbnail, itemName, producerName, date}) => {
	return (
		<Link to={link} className="flex items-center gap-4 max-w-[500px] min-w-[350px] mx-auto border rounded-md bg-white shadow mb-4 p-4">
			<div className="w-[120px] h-[120px]">
				<img src={thumbnail} className="w-full h-full object-cover" alt={itemName}/>
			</div>
			<div className="w-[calc(100%_-_120px_-_1rem)]">
				<p className="mb-2">{itemName}</p>
				<p className="text-right mb-4">{producerName}</p>
				<p className="text-right text-sm">申請日：{date}</p>
			</div>
		</Link>
	);
};

export default TradeItemPanel;
