import {MainAppLayout} from "@/react/app/mainApp/features//layout";
import ItemShowImage from "@/react/app/mainApp/features/item/ItemShowImage/ItemShowImage";
import React from "react";
import {useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import Loader from "@/react/app/mainApp/features/loader/Loader";
import ItemShowDescription from "@/react/app/mainApp/features/item/ItemShowDescription/ItemShowDescription";
import ButtonGroup from "./features/BttonGroup/ButtonGroup";

const ItemShow = () => {
	const params = useParams()
	const { data: itemData} = useGetItem(params.itemUuid);
	if(itemData === undefined)  return <Loader/>

	return (
	  <MainAppLayout>
		  <div className="grid gap-4 lg:grid-cols-2">
			  <ItemShowImage thumbnail={itemData.thumbnail} images={itemData.images}/>
			  <div>
				  <ItemShowDescription data={itemData}/>
				  <ButtonGroup　data={itemData}/>
			  </div>
		  </div>
	  </MainAppLayout>
	);

};

export default ItemShow;
