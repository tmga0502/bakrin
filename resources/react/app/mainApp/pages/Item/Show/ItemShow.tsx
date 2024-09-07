import {MainAppLayout} from "@/react/app/mainApp/features//layout";
import ItemShowImage from "@/react/app/mainApp/features/item/ItemShowImage/ItemShowImage";
import {ItemShowModeProvider} from "@/react/app/mainApp/pages/Item/Show/hooks/ItemContext";
import React from "react";
import {useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import Loader from "@/react/app/mainApp/features/loader/Loader";
import ItemShowDescription from "@/react/app/mainApp/features/item/ItemShowDescription/ItemShowDescription";
import {ShowModeToggler} from "@/react/app/mainApp/pages/Item/Show/features";

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
