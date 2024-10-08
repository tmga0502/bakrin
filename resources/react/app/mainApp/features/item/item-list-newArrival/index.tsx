import React from 'react';
import {NewArrivalListType} from "./types/type";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import {ItemList} from "@/react/app/mainApp/components/layout/item";

const Index: React.FC<NewArrivalListType> = ({itemData}) => {
	return (
		<>
			<PageTitle en={'ITEMS'} jp={'新着アイテム一覧'}/>
			<ItemList itemList={itemData}/>
		</>
	);
};

export default Index;
