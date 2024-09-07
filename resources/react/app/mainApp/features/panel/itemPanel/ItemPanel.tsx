import React from "react";
import {GetPlanImage} from "@/react/app/mainApp/functions/GetPlanImage";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import ItemPanelTv from "./ItemPanel.tv";
import {ItemPanelType} from "./Itempanel.type";


const ItemPanel:React.FC<ItemPanelType>= ({data}) => {
	const {uuid, planId, thumbnail, name} = data;
	const plan = GetPlanImage(planId)
	const color:any = plan !== undefined ? plan.color : 'red'

	return (
		<Link to={'/items/'+uuid}>
			<div className="relative w-full before:content-[''] before:block before:pt-[100%] rounded-md">
				<div className={ItemPanelTv({ color: color })}>
					{plan && plan.displayName}
				</div>
				<LazyLoadImage
					src={thumbnail}
					className="absolute w-full h-full top-0 left-0 object-cover object-center rounded-md"
					alt={name}
				/>
			</div>
		</Link>
	);
};

export default ItemPanel
