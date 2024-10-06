
import React from 'react';
import {ItemPlanRibbonType} from "./ItemPlanRibbon.type";
import {BudgeDefaultStyle} from './ItemPlanRibbon.styles'

const ItemPlanRibbon: React.FC<ItemPlanRibbonType> = ({plan}) => {
	return (
		<div css={BudgeDefaultStyle(plan.color, plan.textColor)} >
			{plan && plan.displayName}
		</div>
	);
};

export default ItemPlanRibbon;
