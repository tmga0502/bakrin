import React from 'react';
import {WantListType} from "./types/type";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import {ItemList} from "@/react/app/mainApp/components/layout/item";

const Index: React.FC<WantListType> = ({itemData}) => {
	return (
		<>
			<PageTitle en={'ITEMS'} jp={'欲しいものリスト一覧'}/>
			<ItemList itemList={itemData}/>
		</>
	);
};

export default Index;
