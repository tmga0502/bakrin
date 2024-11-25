import React from 'react';
import {ShowButtonBox, ShowButtonGroup, ShowContentsBox, ShowWrapper} from "@mainFeatures/item/styles";
import {ItemDescription, ItemFavoriteButton, ItemImageSlider, LinkToSendMessageButton, LinkToSendRequestButton, UserPanel} from "@mainFeatures/item/components";
import {ItemDataType} from "@mainFeatures/item/types";

const ItemShowConItemShowContents:React.FC<ItemDataType> = ({itemData}) => {
	return (
		<div css={ShowWrapper}>
			<div css={ShowContentsBox}>
				<ItemImageSlider thumbnail={itemData.thumbnail_path} images={itemData.images}/>
			</div>
			<div css={ShowContentsBox}>
				<ItemDescription itemData={itemData}/>
				<div css={ShowButtonGroup}>
					<div css={ShowButtonBox}>
						<LinkToSendRequestButton itemData={itemData}/>
					</div>
					<div css={ShowButtonBox}>
						<LinkToSendMessageButton itemData={itemData}/>
					</div>
					<div css={ShowButtonBox}>
						<ItemFavoriteButton itemData={itemData}/>
					</div>
				</div>
				<UserPanel itemData={itemData}/>
			</div>
		</div>
	);
};

export default ItemShowConItemShowContents;
