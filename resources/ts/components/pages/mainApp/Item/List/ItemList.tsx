import {MainAppLayout} from "@/ts/components/ui/layout";
import {useGetNewArrivalItems} from "@/ts/_api/query/ItemQuery";
import {PageTitle} from "@/ts/components/ui/title/Title";
import React from "react";
import Loader from "@/ts/components/ui/loader/Loader";
import {ItemPanel} from "@/ts/components/model/item/ItemPanel/ItemPanel";

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
