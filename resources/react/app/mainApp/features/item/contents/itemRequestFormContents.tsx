import React from 'react';
import {ItemDataType} from "@mainFeatures/item/types";
import {ShowButtonBox, ShowButtonGroup, ShowContentsBox, ShowWrapper} from "@mainFeatures/item/styles";
import {ItemDescription, ItemImageSlider, MyItemList, PrevButton} from "@mainFeatures/item/components";
import RequestConfirmModal from "@mainFeatures/item/components/RequestConfirmModal/RequestConfirmModal";

const ItemRequestFormContents: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<div css={ShowWrapper}>
			<div css={ShowContentsBox}>
				<ItemImageSlider thumbnail={itemData.thumbnail} images={itemData.images}/>
			</div>
			<div css={ShowContentsBox}>
				<ItemDescription itemData={itemData}/>
				<MyItemList/>

				<div css={ShowButtonGroup}>
					<div css={ShowButtonBox}>
						<RequestConfirmModal itemData={itemData}/>
					</div>
					<div css={ShowButtonBox}>
						<PrevButton itemData={itemData}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemRequestFormContents;
