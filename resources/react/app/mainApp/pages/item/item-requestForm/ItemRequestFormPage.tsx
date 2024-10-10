import React from 'react';
import {useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {ItemType} from "@/react/types/ItemType";
import {ShowButtonBox, ShowButtonGroup, ShowContentsBox, ShowWrapper} from "@mainFeatures/item/styles";
import {ItemDescription, ItemImageSlider, MyItemList, PrevButton, RequestButton} from "@mainFeatures/item/components";

const ItemRequestFormPage = () => {
	const params = useParams()
	const { data: itemData = {} as ItemType} = useGetItem(params.itemUuid);

	return (
		<MainLayout>
			<div css={ShowWrapper}>
				<div css={ShowContentsBox}>
					<ItemImageSlider thumbnail={itemData.thumbnail} images={itemData.images}/>
				</div>
				<div css={ShowContentsBox}>
					<ItemDescription itemData={itemData}/>
					<MyItemList/>
					<div css={ShowButtonGroup}>
						<div css={ShowButtonBox}>
							<RequestButton/>
						</div>
						<div css={ShowButtonBox}>
							<PrevButton itemData={itemData}/>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default ItemRequestFormPage;
