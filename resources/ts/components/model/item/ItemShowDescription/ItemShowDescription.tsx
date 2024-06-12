import React from 'react';
import {Plan} from "@/ts/_constants/Plan";
import { ItemShowDescriptionType } from './_type';

const ItemShowDescription: React.FC<ItemShowDescriptionType> = ({data }) => {
	const plan = Plan.find(plan => plan.number === data.planId)
	const planName = plan ? plan.name : '';

	return (
		<div>
			<div className="text-2xl">{data.name}</div>
			<div className="p-8">
				<p className="leading-10">{planName}</p>
				<p className="leading-10">{`数量：${data.count}${data.unit.name}`}</p>
				<p className="text-red-500 leading-10">{`数量目安：${data.guideCount}${data.guide_unit.name}`}</p>

				<div className="mt-10 leading-8">
					{data.description}
				</div>

			</div>
		</div>
	);
};

export default ItemShowDescription;
