import React from 'react';
import {ItemDescription, ItemImageSlider} from "@/react/app/mainApp/components/layout/item";
import {SendRequestButton, SendMessageButton, ItemFavoriteButton, ProducerPanel} from "@/react/app/mainApp/features/item/item-show/components";
import {ItemDataType} from "@/react/app/mainApp/features/item/item-show/types/type";
import {ButtonBox, ButtonGroup, Wrapper} from "@/react/app/mainApp/features/item/item-show/index.styles";

const Index: React.FC<ItemDataType> = ({itemData}) => {
	return (
		<div css={Wrapper}>
			<ItemImageSlider thumbnail={itemData.thumbnail} images={itemData.images}/>
			<div>
				<ItemDescription itemData={itemData}/>
				<div css={ButtonGroup}>
					<div css={ButtonBox}>
						<SendRequestButton itemData={itemData}/>
					</div>
					<div css={ButtonBox}>
						<SendMessageButton itemData={itemData}/>
					</div>
					<div css={ButtonBox}>
						<ItemFavoriteButton itemData={itemData}/>
					</div>
				</div>
				<ProducerPanel itemData={itemData}/>
			</div>
		</div>
	);
};

export default Index;
