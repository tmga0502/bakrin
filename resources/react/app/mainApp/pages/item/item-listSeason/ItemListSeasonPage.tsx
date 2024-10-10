import React from 'react';
import {useGetSeasonItems} from "@/react/api/query/ItemQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import {ItemList} from "@mainFeatures/item/components";

const ItemListSeasonPage = () => {
	const { data: itemData =[] } = useGetSeasonItems();
	return (
		<MainLayout>
			<PageTitle en={'ITEMS'} jp={'旬のアイテム一覧'}/>
			<ItemList itemList={itemData}/>
		</MainLayout>
	);
};

export default ItemListSeasonPage;
