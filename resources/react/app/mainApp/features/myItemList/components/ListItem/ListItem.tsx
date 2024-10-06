import React from 'react';
import {ListItemType} from "./ListItem.type";
import {ImageBox, ImageStyle, ItemBox, ItemName, LinkBox, TextBox, Wrapper} from './ListItem.styles';
import {Link} from "react-router-dom";
import ItemPlanBadge from "@/react/app/mainApp/components/elements/budge/ItemPlanBadge/ItemPlanBadge";

const ListItem: React.FC<ListItemType> = ({data}) => {
	return (
		<Link to={data.uuid} css={LinkBox}>
			<div css={Wrapper}>
				<div css={ItemBox}>
					<div css={ImageBox}>
						<img src={data.thumbnail} css={ImageStyle} alt={`${data.name} image`}/>
					</div>
					<div css={TextBox}>
						<ItemPlanBadge plan={data.plan}/>
						<p css={ItemName}>{data.name}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ListItem;
