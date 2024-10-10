import React from "react";
import {useGetNewArrivalItems} from "@/react/api/query/ItemQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {ItemList} from "@mainFeatures/item/components";
import {PageTitle} from "@mainElements/title";

const ItemListPage = () => {
	const { data: itemList = [] } = useGetNewArrivalItems()

	return (
	  <MainLayout>
		  <PageTitle en={'ITEMS'} jp={'アイテム一覧'}/>
		  <ItemList itemList={itemList}/>
	  </MainLayout>
	);
};

export default ItemListPage;
