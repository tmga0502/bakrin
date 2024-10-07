import React from 'react';
import {useParams} from "react-router-dom";
import {useGetItem} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import ItemRequestForm from "@/react/app/mainApp/features/item/item-requestForm";

const ItemRequestFormPage = () => {
	const params = useParams()
	const { data: itemData} = useGetItem(params.itemUuid);

	return (
		<MainLayout>
			{itemData?.id !== undefined ? (
				<ItemRequestForm data={itemData}/>
			):(
				<CanNotGetData/>
			)}
		</MainLayout>
	);
};

export default ItemRequestFormPage;
