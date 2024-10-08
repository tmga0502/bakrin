import React from 'react';
import {SeasonListType} from "./types/type";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import {ItemList} from "@/react/app/mainApp/components/layout/item";

const Index: React.FC<SeasonListType> = ({itemData}) => {
	return (
		<>
			<PageTitle en={'ITEMS'} jp={'旬のアイテム一覧'}/>
			<ItemList itemList={itemData}/>
		</>
	);
};

export default Index;
