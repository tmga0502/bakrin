import React from 'react';
import {useGetWantItems} from "@/react/api/query/ItemQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import {ItemList} from "@mainFeatures/item/components";

const ItemListWantPage = () => {
	const { data: itemData = [] } = useGetWantItems();
	return (
		<MainLayout>
			<PageTitle en={'ITEMS'} jp={'欲しいものリスト一覧'}/>
			<ItemList itemList={itemData}/>
		</MainLayout>
	);
};

export default ItemListWantPage;
