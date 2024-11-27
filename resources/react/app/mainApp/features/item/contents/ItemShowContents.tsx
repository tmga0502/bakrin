import React from 'react';
import {ItemDescription, ItemFavoriteButton, ItemImageSlider, LinkToSendMessageButton, LinkToSendRequestButton, UserPanel} from "@mainFeatures/item/components";
import {ItemDataType} from "@mainFeatures/item/types";

const ItemShowConItemShowContents:React.FC<ItemDataType> = ({itemData}) => {
	return (
		<div className={'grid grid-cols-1 lg:grid-cols-2 gap-6'}>
			<div className={'w-full'}>
				<ItemImageSlider thumbnail={itemData.thumbnail_path} images={itemData.images}/>
			</div>
			<div className={'w-full'}>
				<ItemDescription itemData={itemData}/>
				<div className={'mb-12'}>
					<div className={'mb-6'}>
						<LinkToSendRequestButton itemData={itemData}/>
					</div>
					<div className={'mb-6'}>
						<LinkToSendMessageButton itemData={itemData}/>
					</div>
					<div className={'mb-6'}>
						<ItemFavoriteButton itemData={itemData}/>
					</div>
				</div>
				<UserPanel itemData={itemData}/>
			</div>
		</div>
	);
};

export default ItemShowConItemShowContents;
