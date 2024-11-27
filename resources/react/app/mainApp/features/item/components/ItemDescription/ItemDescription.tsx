import React from 'react';
import {ItemDataType} from "@mainFeatures/item/types";
import ItemPlanBadge from "@mainElements/budge/ItemPlanBadge/ItemPlanBadge";

const ItemDescription: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<div>
			<div className={'text-2xl'}>{itemData.name}</div>
			<div className={'p-8'}>
				<div className={'mb-4 leading-8'}>
					<ItemPlanBadge plan={itemData.plan}/>
				</div>
				<p className={'mb-4 leading-8'}>{`${itemData.category.name} / ${itemData.variety.name}`}</p>
				<p className={'mb-4 leading-8'}>{`数量：${itemData.count}${itemData.unit.name}`}</p>
				<p className={'mb-4 leading-8'}>{`数量：${itemData.count}${itemData.unit.name}`}</p>
				<p className={'mb-4 leading-8, text-danger'}>{`数量目安：${itemData.guide_count}${itemData.guide_unit.name}`}</p>

				<div className={'mb-4 leading-8'}>
					{itemData.description}
				</div>

			</div>
		</div>
	);
};

export default ItemDescription;
