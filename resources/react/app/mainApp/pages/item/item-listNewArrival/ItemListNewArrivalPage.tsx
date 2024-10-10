import React from 'react';
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {useGetNewArrivalItems} from "@/react/api/query/ItemQuery";
import {PageTitle} from "@mainElements/title";
import {ItemList} from "@mainFeatures/item/components";

const ItemListNewArrivalPage = () => {
	//新着アイテム
	const { data: itemData = [] } = useGetNewArrivalItems();
	return (
		<MainLayout>
			<PageTitle en={'ITEMS'} jp={'新着アイテム一覧'}/>
			<ItemList itemList={itemData}/>
		</MainLayout>
	);
};

export default ItemListNewArrivalPage;
