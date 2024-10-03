import React from 'react';
import {ItemDescriptionType} from "./ItemDescription.type";
import {ItemName, DescriptionWrapper, DescriptionItem, DescriptionItemRed} from './ItemDescription.css';
import {Plan} from "@/react/_constants/Plan";

const ItemDescription: React.FC<ItemDescriptionType> = ({data}) => {
	const plan = Plan.find(plan => plan.number === data.planId)
	const planName = plan ? plan.name : '';

	return (
		<div>
			<div className={ItemName}>{data.name}</div>
			<div className={DescriptionWrapper}>
				<p className={DescriptionItem}>{planName}</p>
				<p className={DescriptionItem}>{`数量：${data.count}${data.unit.name}`}</p>
				<p className={DescriptionItemRed}>{`数量目安：${data.guideCount}${data.guide_unit.name}`}</p>

				<div className={DescriptionItem}>
					{data.description}
				</div>

			</div>
		</div>
	);
};

export default ItemDescription;
