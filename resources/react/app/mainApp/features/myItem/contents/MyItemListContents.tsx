import React from 'react';
import {ListCard, NewButton} from "@mainFeatures/myItem/components";
import {ItemType} from "@/react/types/ItemType";
import {ItemDatasType} from "@mainFeatures/myItem/types";

const MyItemListContents:React.FC<ItemDatasType> = ({itemDatas}) => {
	return (
		<>
			<NewButton/>
			{itemDatas.map((item: ItemType) => (
				<ListCard key={item.id} itemData={item}/>
			))}
		</>
	);
};

export default MyItemListContents;
