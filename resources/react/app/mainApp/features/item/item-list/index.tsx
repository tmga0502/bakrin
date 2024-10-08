import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import {IndexType} from "@/react/app/mainApp/features/item/item-list/types/type";
import {ItemList} from "@/react/app/mainApp/components/layout/item";

const Index: React.FC<IndexType> = ({itemList}) => {
	return (
		<>
			<PageTitle en={'ITEMS'} jp={'アイテム一覧'}/>
			<ItemList itemList={itemList}/>
		</>
	);
};

export default Index;
