import React from "react";
import {useGetNewArrivalItems} from "@/react/api/query/ItemQuery";
import {PageTitle} from "@/react/app/mainApp/components/title";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import ItemList from "@/react/app/mainApp/features/itemList/components/ItemList/ItemList";

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
