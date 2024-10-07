import React from 'react';
import {ItemDescription, ItemImageSlider} from "@/react/app/mainApp/components/layout/item";
import {MyItemList, RequestButton, PrevButton} from "@/react/app/mainApp/features/item/item-requestForm/components";
import {IndexType} from "@/react/app/mainApp/features/item/item-requestForm/types/type";
import {ButtonGroup, Wrapper} from "@/react/app/mainApp/features/item/item-requestForm/index.styles";

const Index:React.FC<IndexType> = ({data}) => {
	return (
		<div css={Wrapper}>
			<ItemImageSlider thumbnail={data.thumbnail} images={data.images}/>
			<div>
				<ItemDescription data={data}/>
				<MyItemList/>
				<div css={ButtonGroup}>
					<RequestButton/>
					<PrevButton data={data}/>
				</div>
			</div>
		</div>
	);
};

export default Index;
