import React from 'react';
import {ItemPlanRibbonType} from "./ItemPlanRibbon.type";
import {BudgeDefaultStyle} from './ItemPlanRibbon.styles'

const ItemPlanRibbon: React.FC<ItemPlanRibbonType> = ({plan}) => {
	return (
		<div css={BudgeDefaultStyle(plan.badgeColor, plan.badgeTextColor)} >
			{plan && plan.displayName}
		</div>
	);
};

export default ItemPlanRibbon;
