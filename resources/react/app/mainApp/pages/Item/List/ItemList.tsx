import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {useGetNewArrivalItems} from "@/react/api/query/ItemQuery";
import {PageTitle} from "@/react/app/mainApp/components/title";
import React from "react";
import Loader from "@/react/app/mainApp/features/loader/Loader";
import {ItemPanel} from "@/react/app/mainApp/features/panel";

const ItemListPage = () => {
	const { data: itemLists } = useGetNewArrivalItems()
	if(itemLists === undefined) return <Loader/>


	return (
	  <MainAppLayout>
		  <PageTitle en={'ITEMS'} jp={'アイテム一覧'}/>
		  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
			  {itemLists.map((item) => (
				  <ItemPanel data={item} key={item.id}/>
			  ))}
		  </div>
	  </MainAppLayout>
	);
};

export default ItemListPage;
