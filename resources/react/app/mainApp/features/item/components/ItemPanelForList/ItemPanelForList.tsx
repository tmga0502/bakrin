import React from 'react';
import {ImageStyle, Wrapper} from './ItemPanelForList.styles';
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import ItemPlanRibbon from "@mainElements/budge/ItemPlanRibbon/ItemPlanRibbon";
import {ItemDataType} from "@mainFeatures/item/types";

const ItemPanelForList: React.FC<ItemDataType> = ({itemData}) => {
	const {uuid, thumbnail, name} = itemData;

	return (
		<Link to={'/items/'+uuid}>
			<div css={Wrapper}>
				<ItemPlanRibbon plan={itemData.plan}/>
				<LazyLoadImage
					src={thumbnail}
					css={ImageStyle}
					alt={name}
				/>
			</div>
		</Link>
	);
};

export default ItemPanelForList;
