import React from 'react';
import {ItemName, DescriptionWrapper, DescriptionItem, ColorRed} from './ItemDescription.styles';
import {Plan} from "@/react/_constants/Plan";
import {ItemDataType} from "@mainFeatures/item/types";

const ItemDescription: React.FC<ItemDataType> = ({itemData}) => {
	const plan = Plan.find(plan => plan.number === itemData.planId)
	const planName = plan ? plan.name : '';

	return (
		<div>
			<div css={ItemName}>{itemData.name}</div>
			<div css={DescriptionWrapper}>
				<p css={DescriptionItem}>{planName}</p>
				<p css={DescriptionItem}>{`数量：${itemData.count}${itemData.unit.name}`}</p>
				<p css={[DescriptionItem, ColorRed]}>{`数量目安：${itemData.guideCount}${itemData.guide_unit.name}`}</p>

				<div css={DescriptionItem}>
					{itemData.description}
				</div>

			</div>
		</div>
	);
};

export default ItemDescription;
