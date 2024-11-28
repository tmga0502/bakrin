import React from 'react';
import {Link} from "react-router-dom";
import ItemPlanBadge from "@mainElements/budge/ItemPlanBadge/ItemPlanBadge";
import {ItemDataType} from "@mainFeatures/myItem/types";
import {createImageUrl} from "@/react/app/mainApp/functions/formatter";

const ListCard: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<Link to={itemData.uuid} className={'block whitespace-nowrap hover:opacity-80'}>
			<div className={'flex items-center justify-between gap-6 bg-white border border-bakGray rounded-md shadow-md p-4 mb-2'}>
				<div className={'flex items-center gap-4'}>
					<div className={'w-16 h-16'}>
						<img src={createImageUrl(itemData.thumbnail_path)} className={'w-full h-full object-cover'} alt={`${itemData.name} image`}/>
					</div>
					<div className={'md:flex md:items-center md:gap-2'}>
						<ItemPlanBadge plan={itemData.plan}/>
						<p className={'block whitespace-nowrap hover:opacity-80'}>{itemData.name}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ListCard;
