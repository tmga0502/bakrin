import React, {ReactNode} from "react";
import {useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";
import ItemShowContents from "@mainFeatures/item/contents/ItemShowContents";

const ItemShowPage = () => {
	const params = useParams()
	const { data: itemData, isLoading} = useGetItem(params.itemUuid);

	let contents: ReactNode
	if (isLoading){
		contents = <ContentsLoader/>
	}else if (!itemData){
		contents = <CanNotGetData/>
	}else{
		contents = <ItemShowContents itemData={itemData}/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);

};

export default ItemShowPage;
