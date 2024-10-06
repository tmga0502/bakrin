import React from 'react';
import {ItemShowBoxType} from "./ItemShowBox.type";
import {ButtonGroup, Wrapper} from './ItemShowBox.styles';
import {ItemImageSlider, ItemDescription} from "@/react/app/mainApp/components/layout/item";
import MyItemList from "@/react/app/mainApp/features/itemRequestForm/components/MyItemList/MyItemList";
import RequestButton from "@/react/app/mainApp/features/itemRequestForm/components/RequestButton/RequestButton";
import PrevButton from "@/react/app/mainApp/features/itemRequestForm/components/PrevButton/PrevButton";

const ItemShowBox: React.FC<ItemShowBoxType> = ({data}) => {

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

export default ItemShowBox;
