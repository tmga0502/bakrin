import {GetPlanImage} from "@/ts/functions/GetPlanImage";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import React from "react";
import {tv} from "tailwind-variants";

const ItemPanelTv = tv({
	base:`
    inline-block absolute left-0 top-[3%] box-border py-0 px-4 m-0 h-5 leading-5 text-xs text-white bg-orange-500 shadow-ribbon z-100 rounded-tr-[5px] rounded-br-[5px]
    before:absolute before:content-[''] before:top-0 before:-left-[7px] before:border-0 before:h-6 before:w-[7px] before:bg-orange-500 before:rounded-tl-[5px] before:rounded-bl-[5px]
    after:absolute after:content-[''] after:-bottom-[7px] after:-left-[5px] after:border-0 after:h-5 after:bg-orange-500 after:rounded-tl-[5px] after:rounded-bl-[5px]
    `,
	variants: {
		color: {
			red: "bg-red-500 before:bg-red-500 after:bg-red-500",
			blue: "bg-sky-500 before:bg-sky-500 after:bg-sky-500",
			green: "bg-green-500 before:bg-green-500 after:bg-green-500",
			white: "bg-white before:bg-white-500 after:bg-white-500 text-black",
		},
		defaultVariants: {
			color: 'red'
		},
	},
});

export const ItemPanel = ({data}: any) => {
	const plan = GetPlanImage(data.planId)
	const color: any = plan !== undefined ? plan.color : 'red'

	return (
		<Link to={'/items/'+data.uuid}>
			<div className="relative w-full before:content-[''] before:block before:pt-[100%] rounded-md">
				<div className={ItemPanelTv({ color: color })}>
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
