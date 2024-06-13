import {MainAppLayout} from "@/ts/components/ui/layout";
import ItemShowImage from "@/ts/components/model/item/ItemShowImage/ItemShowImage";
import {ItemShowModeProvider} from "@/ts/components/pages/mainApp/Item/Show/hooks/ItemContext";
import React from "react";
import {useParams} from "react-router-dom";
import {useGetItem} from "@/ts/_api/query/ItemQuery";
import Loader from "@/ts/components/ui/loader/Loader";
import ItemShowDescription from "@/ts/components/model/item/ItemShowDescription/ItemShowDescription";
import {ShowModeToggler} from "@/ts/components/pages/mainApp/Item/Show/features";

const ItemShow = () => {
	const params = useParams()
	const { data: itemData} = useGetItem(params.itemUuid);
	if(itemData === undefined)  return <Loader/>

	return (
	  <MainAppLayout>
		  <ItemShowModeProvider>
			  <div className="grid gap-4 lg:grid-cols-2">
				  <ItemShowImage thumbnail={itemData.thumbnail} images={itemData.images}/>
				  <div>
					  <ItemShowDescription data={itemData}/>
					  <ShowModeToggler data={itemData}/>
				  </div>
			  </div>
		  </ItemShowModeProvider>
	  </MainAppLayout>
	);

};

export default ItemShow;
