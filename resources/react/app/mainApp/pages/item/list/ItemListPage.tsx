import React from "react";
import {useGetNewArrivalItems} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import ItemList from "@/react/app/mainApp/features/item/item-list/components/ItemList/ItemList";

const ItemListPage = () => {
	const { data: itemList = [] } = useGetNewArrivalItems()

	return (
	  <MainLayout>
		  <ItemList itemList={itemList}/>
	  </MainLayout>
	);
};

export default ItemListPage;
