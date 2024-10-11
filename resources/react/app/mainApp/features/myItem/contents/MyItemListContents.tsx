import React from 'react';
import {ListCard, NewButton} from "@mainFeatures/myItem/components";
import {ItemType} from "@/react/types/ItemType";
import ContainerMd from "@mainLayouts/container/ContainerMd/ContainerMd";
import {ItemDatasType} from "@mainFeatures/myItem/types";

const MyItemListContents:React.FC<ItemDatasType> = ({itemDatas}) => {
	return (
		<>
			<ContainerMd>
				<NewButton/>
				{itemDatas.map((item: ItemType) => (
					<ListCard key={item.id} itemData={item}/>
				))}
			</ContainerMd>
		</>
	);
};

export default MyItemListContents;
