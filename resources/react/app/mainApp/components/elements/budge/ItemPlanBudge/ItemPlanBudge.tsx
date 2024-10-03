import React from 'react';
import {ItemPlanBudgeType} from "./ItemPlanBudge.type";
import {BudgeStyle} from './ItemPlanBudge.css'

const ItemPlanBudge: React.FC<ItemPlanBudgeType> = ({color, plan}) => {
	return (
		<div className={BudgeStyle({color: color})}>
			{plan && plan.displayName}
		</div>
	);
};

export default ItemPlanBudge;
