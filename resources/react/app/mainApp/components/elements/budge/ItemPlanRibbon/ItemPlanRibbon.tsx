import React from 'react';
import {PlanType} from "@/react/types/PlanType";
import {tv} from "tailwind-variants";

const ItemPlanRibbonTv = tv({
	base: 'inline-block absolute top-[3%] left-0 px-4 text-xs rounded-r-md shadow z-[100] text-white before:content-[""] before:absolute before:top-0 before:left-[-7px] before:h-6 before:w-[7px] before:rounded-l-md after:content-[""] after:absolute after:bottom-[-7px] after:left-[-5px] after:h-5 after:rounded-l-md',
	variants:{
		displayName:{
			'お手頃'  : 'bg-danger before:bg-danger after:bg-danger',
			'おすすめ' : 'bg-info before:bg-info after:bg-info',
			'満足'    : 'bg-success before:bg-success after:bg-success',
			'無制限'  : 'bg-black before:bg-black after:bg-black',
		},
	},
})

const ItemPlanRibbon: React.FC<{plan: PlanType}> = ({plan}) => {
	return (
		<div className={ItemPlanRibbonTv({displayName: plan.display_name})} >
			{plan && plan.display_name}
		</div>
	);
};

export default ItemPlanRibbon;
