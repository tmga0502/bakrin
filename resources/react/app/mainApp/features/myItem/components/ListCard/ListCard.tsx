import React from 'react';
import {ImageBox, ImageStyle, ItemBox, ItemName, LinkBox, TextBox, Wrapper} from './ListCard.styles';
import {Link} from "react-router-dom";
import ItemPlanBadge from "@mainElements/budge/ItemPlanBadge/ItemPlanBadge";
import {ItemDataType} from "@mainFeatures/myItem/types";

const ListCard: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<Link to={itemData.uuid} css={LinkBox}>
			<div css={Wrapper}>
				<div css={ItemBox}>
					<div css={ImageBox}>
						<img src={itemData.thumbnail} css={ImageStyle} alt={`${itemData.name} image`}/>
					</div>
					<div css={TextBox}>
						<ItemPlanBadge plan={itemData.plan}/>
						<p css={ItemName}>{itemData.name}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ListCard;
