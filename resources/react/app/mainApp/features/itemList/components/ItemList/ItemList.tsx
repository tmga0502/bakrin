import React from 'react';
import {ItemListType} from "./ItemList.type";
import {Wrapper} from './ItemList.css';
import {ListItemPanel} from "@/react/app/mainApp/components/layout/panel";

const ItemList: React.FC<ItemListType> = ({itemList}) => {
	return (
		<div className={Wrapper}>
			{itemList.map((item) => (
				<ListItemPanel data={item} key={item.id}/>
			))}
		</div>
	);
};

export default ItemList;
