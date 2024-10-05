import React from 'react';
import {ItemShowBoxType} from "./ItemShowBox.type";
import {ButtonGroup, Wrapper} from './ItemShowBox.css';
import {ItemImageSlider, ItemDescription} from "@/react/app/mainApp/components/layout/item";
import MyItemList from "@/react/app/mainApp/features/itemRequestForm/components/MyItemList/MyItemList";
import RequestButton from "@/react/app/mainApp/features/itemRequestForm/components/RequestButton/RequestButton";
import PrevButton from "@/react/app/mainApp/features/itemRequestForm/components/PrevButton/PrevButton";

const ItemShowBox: React.FC<ItemShowBoxType> = ({data}) => {

	return (
		<div className={Wrapper}>
			<ItemImageSlider thumbnail={data.thumbnail} images={data.images}/>
			<div>
				<ItemDescription data={data}/>
				<MyItemList/>
				<div className={ButtonGroup}>
					<RequestButton/>

					<PrevButton data={data}/>
				</div>
			</div>
		</div>
	);
};

export default ItemShowBox;
