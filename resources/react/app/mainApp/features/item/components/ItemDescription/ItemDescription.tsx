import React from 'react';
import {ItemName, DescriptionWrapper, DescriptionItem, ColorRed} from './ItemDescription.styles';
import {ItemDataType} from "@mainFeatures/item/types";
import ItemPlanBadge from "@mainElements/budge/ItemPlanBadge/ItemPlanBadge";

const ItemDescription: React.FC<ItemDataType> = ({itemData}) => {
console.log(itemData);
	return (
		<div>
			<div css={ItemName}>{itemData.name}</div>
			<div css={DescriptionWrapper}>
				<div css={DescriptionItem}>
					<ItemPlanBadge plan={itemData.plan}/>
				</div>
				<p css={DescriptionItem}>{`${itemData.category.name} / ${itemData.variety.name}`}</p>
				<p css={DescriptionItem}>{`数量：${itemData.count}${itemData.unit.name}`}</p>
				<p css={DescriptionItem}>{`数量：${itemData.count}${itemData.unit.name}`}</p>
				<p css={[DescriptionItem, ColorRed]}>{`数量目安：${itemData.guide_count}${itemData.guide_unit.name}`}</p>

				<div css={DescriptionItem}>
					{itemData.description}
				</div>

			</div>
		</div>
	);
};

export default ItemDescription;
