import React from 'react';
import {ItemPlanRibbonType} from "./ItemPlanRibbon.type";
import {BudgeDefaultStyle} from './ItemPlanRibbon.styles'

const ItemPlanRibbon: React.FC<ItemPlanRibbonType> = ({plan}) => {
	return (
		<div css={BudgeDefaultStyle(plan.badge_color, plan.badge_text_color)} >
			{plan && plan.display_name}
		</div>
	);
};

export default ItemPlanRibbon;
