import React from 'react';
import {ItemPlanBadgeType} from "./ItemPlanBadge.type";
import {BudgeStyle} from './ItemPlanBadge.styles';

const ItemPlanBadge: React.FC<ItemPlanBadgeType> = ({plan}) => {
	return (
		<div css={BudgeStyle(plan.badge_color, plan.badge_text_color)}>
			{plan && plan.display_name}
		</div>
	);
};

export default ItemPlanBadge;
