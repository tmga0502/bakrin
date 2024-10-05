import React from "react";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {ListItemPanelType} from "./ListItemPanel.type";
import {ImageStyle, Wrapper} from './ListItemPanel.styles'
import ItemPlanBudge from "@/react/app/mainApp/components/elements/budge/ItemPlanBudge/ItemPlanBudge";


const ListItemPanel:React.FC<ListItemPanelType>= ({data}) => {
	const {uuid, thumbnail, name} = data;

	return (
		<Link to={'/items/'+uuid}>
			<div css={Wrapper}>
				<ItemPlanBudge plan={data.plan}/>
				<LazyLoadImage
					src={thumbnail}
					css={ImageStyle}
					alt={name}
				/>
			</div>
		</Link>
	);
};

export default ListItemPanel
