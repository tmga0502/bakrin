import React from "react";
import {useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {ItemDescription, ItemFavoriteButton, ItemImageSlider, ProducerPanel, LinkToSendMessageButton, LinkToSendRequestButton} from "@mainFeatures/item/components";
import {ShowButtonBox, ShowButtonGroup, ShowContentsBox, ShowWrapper} from "@mainFeatures/item/styles";
import PageLoader from "@mainLayouts/Loader/PageLoader/PageLoader";

const ItemShowPage = () => {
	const params = useParams()
	const { data: itemData} = useGetItem(params.itemUuid);

	if(!itemData) return <PageLoader/>

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
