import {GetPlanImage} from "@/ts/functions/GetPlanImage";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import React from "react";
import { planTv } from "./_function";

export const ItemPanel = ({data}: any) => {
	const plan = GetPlanImage(data.planId)
	const color: any = plan !== undefined ? plan.color : 'red'

	return (
		<Link to={'/items/'+data.uuid}>
			<div className="relative w-full before:content-[''] before:block before:pt-[100%] rounded-md">
				<div className={planTv({ color: color })}>
					{plan && plan.displayName}
				</div>
				<LazyLoadImage
					src={data.thumbnail}
					className="absolute w-full h-full top-0 left-0 object-cover object-center rounded-md"
					alt={data.name}
				/>
			</div>
		</Link>
	);
};
