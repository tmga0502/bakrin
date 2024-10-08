import React from 'react';
import {FavoriteListType} from "./types/type";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import {ItemList} from "@/react/app/mainApp/components/layout/item";

const Index: React.FC<FavoriteListType> = ({itemData}) => {
	return (
		<>
			<PageTitle en={'ITEMS'} jp={'お気に入りリスト一覧'}/>
			<ItemList itemList={itemData}/>
		</>
	);
};

export default Index;
