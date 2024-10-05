import React from "react";
import {useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import ItemShowBox from "@/react/app/mainApp/features/itemShow/components/ItemShowBox/ItemShowBox";

const ItemShow = () => {
	const params = useParams()
	const { data: itemData } = useGetItem(params.itemUuid);
	return (
	  <MainLayout>
		  {itemData?.id !== undefined ? (
		  	<ItemShowBox data={itemData}/>
		  ):(
			  <p>データ取得に失敗しました</p>
		  )}
	  </MainLayout>
	);

};

export default ItemShow;
