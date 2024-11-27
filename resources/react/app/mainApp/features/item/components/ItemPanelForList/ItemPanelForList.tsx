import React from 'react';
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import ItemPlanRibbon from "@mainElements/budge/ItemPlanRibbon/ItemPlanRibbon";
import {ItemDataType} from "@mainFeatures/item/types";

const ItemPanelForList: React.FC<ItemDataType> = ({itemData}) => {
	const {uuid, thumbnail_path, name} = itemData;
	return (
		<Link to={'/items/'+uuid}>
			<div className={'relative w-full aspect-square overflow-hidden rounded-md shadow-md'}>
				<ItemPlanRibbon plan={itemData.plan}/>
				<LazyLoadImage
					src={thumbnail_path}
					className={'absolute w-full h-full top-0 left-0 object-cover rounded-md'}
					alt={name}
				/>
			</div>
		</Link>
	);
};

export default ItemPanelForList;
