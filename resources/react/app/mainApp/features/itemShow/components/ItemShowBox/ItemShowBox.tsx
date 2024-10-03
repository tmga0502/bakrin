import React from 'react';
import {ItemShowBoxType} from "./ItemShowBox.type";
import {ButtonBox, ButtonGroup, Wrapper} from './ItemShowBox.css';
import {ItemImageSlider, ItemDescription} from "@/react/app/mainApp/components/layout/item";
import SendRequestButton from "@/react/app/mainApp/features/itemShow/components/SendRequestButton/SendRequestButton";
import SendMessageButton from "@/react/app/mainApp/features/itemShow/components/SendMessageButton/SendMessageButton";
import ItemFavoriteButton from "@/react/app/mainApp/features/itemShow/components/ItemFavoriteButton/ItemFavoriteButton";
import ProducerPanel from "@/react/app/mainApp/features/itemShow/components/ProducerPanel/ProducerPanel";

const ItemShowBox: React.FC<ItemShowBoxType> = ({data}) => {
	return (
		<div className={Wrapper}>
			<ItemImageSlider thumbnail={data.thumbnail} images={data.images}/>
			<div>
				<ItemDescription data={data}/>
				<div className={ButtonGroup}>
					<div className={ButtonBox}>
						<SendRequestButton data={data}/>
					</div>
					<div className={ButtonBox}>
						<SendMessageButton data={data}/>
					</div>
					<div className={ButtonBox}>
						<ItemFavoriteButton data={data}/>
					</div>
				</div>
				<ProducerPanel data={data}/>
			</div>
		</div>
	);
};

export default ItemShowBox;