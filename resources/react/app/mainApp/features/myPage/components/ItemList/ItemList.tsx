import React from 'react';
import GridBox from "@mainLayouts/GridBox/GridBox";
import {ItemPanelForList} from "@mainFeatures/item/components";
import {ItemsDataType} from "@mainFeatures/myPage/types";

const ItemList: React.FC<ItemsDataType> = ({itemsData}) => {
	return (
		<GridBox>
			{itemsData?.map(itemData => (
				<ItemPanelForList itemData={itemData} key={itemData.id}/>
			))}
		</GridBox>
	);
};

export default ItemList;
