import React from 'react';
import {ItemListType} from "./ItemList.type";

import GridBox from "@mainLayouts/GridBox/GridBox";
import {ItemPanelForList} from "@mainFeatures/item/components";

const ItemList: React.FC<ItemListType> = ({itemList, slice}) => {
	const List = slice === undefined ? itemList : itemList.slice(0, slice)
	return (
		<GridBox>
			{List.map((item) => (
				<ItemPanelForList itemData={item} key={item.id}/>
			))}
		</GridBox>
	);
};

export default ItemList;
