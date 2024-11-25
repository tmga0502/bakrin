import React from 'react';
import {AddressStyle, ImageBox, ImageStyle, Wrapper} from './UserPanel.styles';
import {Link} from "react-router-dom";
import {ItemDataType} from "@mainFeatures/item/types";

const UserPanel: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<Link to={`/producers/${itemData.user_id}`}>
			<div css={Wrapper}>
				<div css={ImageBox}>
					<img src={itemData.user.thumbnail_path}
						 css={ImageStyle}
						 alt={itemData.user.organization_name}/>
				</div>
				<div css="">
					<p css={AddressStyle}>{itemData.user.address1 + itemData.user.address2}</p>
					<p>{itemData.user.organization_name}</p>
				</div>
			</div>
		</Link>
	);
};

export default UserPanel;
