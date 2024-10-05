
import React from 'react';
import {ItemPlanBudgeType} from "./ItemPlanBudge.type";
import {BudgeDefaultStyle} from './ItemPlanBudge.styles'

const ItemPlanBudge: React.FC<ItemPlanBudgeType> = ({plan}) => {
	return (
		<div css={BudgeDefaultStyle(plan.color, plan.textColor)} >
			{plan && plan.displayName}
		</div>
	);
};

export default ItemPlanBudge;
