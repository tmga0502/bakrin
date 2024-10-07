import React from 'react';
import {ListItemPanel} from "@/react/app/mainApp/components/layout/panel";
import GridBox from "@/react/app/mainApp/components/layout/GridBox/GridBox";
import {ItemListType} from "@/react/app/mainApp/features/myPage/myPage-favorite/types/type";

const ItemList: React.FC<ItemListType> = ({ItemData}) => {
	return (
		<GridBox>
			{ItemData?.map(item => (
				<ListItemPanel data={item} key={item.id}/>
			))}
		</GridBox>
	);
};

export default ItemList;
