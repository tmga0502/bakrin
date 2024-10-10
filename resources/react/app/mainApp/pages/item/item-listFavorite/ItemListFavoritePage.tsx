import React from 'react';
import {useGetFavoriteItems} from "@/react/api/query/ItemQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import {ItemList} from "@mainFeatures/item/components";

const ItemListFavoritePage = () => {
	const { data: itemData = [] } = useGetFavoriteItems();
	return (
		<MainLayout>
			<PageTitle en={'ITEMS'} jp={'お気に入りリスト一覧'}/>
			<ItemList itemList={itemData}/>
		</MainLayout>
	);
};

export default ItemListFavoritePage;
