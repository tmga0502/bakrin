import React, {ReactNode} from 'react';
import {useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";
import ItemRequestFormContents from "@mainFeatures/item/contents/itemRequestFormContents";

const ItemRequestFormPage = () => {
	const params = useParams()
	const { data: itemData, isLoading} = useGetItem(params.itemUuid);

	let contents: ReactNode
	if (isLoading){
		contents = <ContentsLoader/>
	}else if (!itemData){
		contents = <CanNotGetData/>
	}else{
		contents = <ItemRequestFormContents itemData={itemData}/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default ItemRequestFormPage;
