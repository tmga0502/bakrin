import React from 'react';
import {ItemPlanBadgeType} from "./ItemPlanBadge.type";
import {BudgeStyle} from './ItemPlanBadge.styles';

const ItemPlanBadge: React.FC<ItemPlanBadgeType> = ({plan}) => {
	return (
		<div css={BudgeStyle(plan.color, plan.textColor)}>
			{plan && plan.displayName}
		</div>
	);
};

export default ItemPlanBadge;
