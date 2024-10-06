import React from 'react';
import {ItemListType} from "./ItemList.type";
import {GridStyle} from './ItemList.styles';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import {ListItemPanel} from "@/react/app/mainApp/components/layout/panel";

const ItemList: React.FC<ItemListType> = ({itemData}) => {
	return (
		<>
			<PageTitle en={'ITEMS'} jp={'出品中の商品'}/>
			<div css={GridStyle}>
				{itemData.map((item) => (
					<ListItemPanel data={item} key={item.id}/>
				))}
			</div>
		</>
	);
};

export default ItemList;
