import React from 'react';
import {ItemDescriptionType} from "./ItemDescription.type";
import {ItemName, DescriptionWrapper, DescriptionItem, ColorRed} from './ItemDescription.styles';
import {Plan} from "@/react/_constants/Plan";

const ItemDescription: React.FC<ItemDescriptionType> = ({data}) => {
	const plan = Plan.find(plan => plan.number === data.planId)
	const planName = plan ? plan.name : '';

	return (
		<div>
			<div css={ItemName}>{data.name}</div>
			<div css={DescriptionWrapper}>
				<p css={DescriptionItem}>{planName}</p>
				<p css={DescriptionItem}>{`数量：${data.count}${data.unit.name}`}</p>
				<p css={[DescriptionItem, ColorRed]}>{`数量目安：${data.guideCount}${data.guide_unit.name}`}</p>

				<div css={DescriptionItem}>
					{data.description}
				</div>

			</div>
		</div>
	);
};

export default ItemDescription;
