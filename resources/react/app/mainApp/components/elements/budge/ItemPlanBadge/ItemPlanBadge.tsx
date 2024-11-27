import React from 'react';
import {tv} from "tailwind-variants";
import {PlanType} from "@/react/types/PlanType";

const ItemPlanBadgeTv = tv({
	base: 'inline-block w-[60px] px-1 py-0.5 mx-0.5 text-xs rounded-md text-center text-white',
	variants:{
		displayName:{
			'お手頃'  : 'bg-danger',
			'おすすめ' : 'bg-info',
			'満足'    : 'bg-success',
			'無制限'  : 'bg-black',
		},
	},
})

const ItemPlanBadge: React.FC<{plan:PlanType}> = ({plan}) => {
	return (
		<div className={ItemPlanBadgeTv({displayName: plan.display_name})}>
			{plan && plan.display_name}
		</div>
	);
};

export default ItemPlanBadge;
