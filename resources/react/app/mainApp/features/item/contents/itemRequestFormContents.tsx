import React from 'react';
import {ItemDataType} from "@mainFeatures/item/types";
import {ItemDescription, ItemImageSlider, MyItemList, PrevButton} from "@mainFeatures/item/components";
import RequestConfirmModal from "@mainFeatures/item/components/RequestConfirmModal/RequestConfirmModal";

const ItemRequestFormContents: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<div className={'grid grid-cols-1 lg:grid-cols-2 gap-6'}>
			<div className={'w-full'}>
				<ItemImageSlider thumbnail={itemData.thumbnail_path} images={itemData.images}/>
			</div>
			<div className={'w-full'}>
				<ItemDescription itemData={itemData}/>
				<MyItemList/>

				<div className={'mb-12'}>
					<div className={'mb-6'}>
						<RequestConfirmModal itemData={itemData}/>
					</div>
					<div className={'mb-6'}>
						<PrevButton itemData={itemData}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemRequestFormContents;
