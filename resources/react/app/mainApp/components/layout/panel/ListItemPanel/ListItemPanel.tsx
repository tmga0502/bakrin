import React from "react";
import {GetPlanImage} from "@/react/app/mainApp/functions/GetPlanImage";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {ListItemPanelType} from "./ListItemPanel.type";
import {ImageStyle, Wrapper} from './ListItemPanel.css'
import ItemPlanBudge from "@/react/app/mainApp/components/elements/budge/ItemPlanBudge/ItemPlanBudge";


const ListItemPanel:React.FC<ListItemPanelType>= ({data}) => {
	const {uuid, planId, thumbnail, name} = data;
	const plan = GetPlanImage(planId)
	const color:any = plan !== undefined ? plan.color : 'red'

	return (
		<Link to={'/items/'+uuid}>
			<div className={Wrapper}>
				<ItemPlanBudge color={color} plan={plan}/>
				<LazyLoadImage
					src={thumbnail}
					className={ImageStyle}
					alt={name}
				/>
			</div>
		</Link>
	);
};

export default ListItemPanel
