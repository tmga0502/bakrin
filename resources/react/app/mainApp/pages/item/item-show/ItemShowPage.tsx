import React from "react";
import {useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {ItemType} from "@/react/types/ItemType";
import {ItemDescription, ItemFavoriteButton, ItemImageSlider, ProducerPanel, LinkToSendMessageButton, LinkToSendRequestButton} from "@mainFeatures/item/components";
import {ShowButtonBox, ShowButtonGroup, ShowContentsBox, ShowWrapper} from "@mainFeatures/item/styles";

const ItemShowPage = () => {
	const params = useParams()
	const { data: itemData = {} as ItemType } = useGetItem(params.itemUuid);
	return (
		<MainLayout>
			<div css={ShowWrapper}>
				<div css={ShowContentsBox}>
					<ItemImageSlider thumbnail={itemData.thumbnail} images={itemData.images}/>
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
					<ProducerPanel itemData={itemData}/>
				</div>
			</div>
		</MainLayout>
	);

};

export default ItemShowPage;
