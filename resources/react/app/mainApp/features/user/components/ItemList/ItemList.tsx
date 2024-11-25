import React from 'react';
import {ItemListType} from "./ItemList.type";
import {GridStyle} from './ItemList.styles';
import {PageTitle} from "@mainElements/title";
import {ItemPanelForList} from "@mainFeatures/item/components";

const ItemList: React.FC<ItemListType> = ({itemData}) => {
	return (
		<>
			<PageTitle en={'ITEMS'} jp={'出品中の商品'}/>
			<div css={GridStyle}>
				{itemData.map((item) => (
					<ItemPanelForList itemData={item} key={item.id}/>
				))}
			</div>
		</>
	);
};

export default ItemList;
