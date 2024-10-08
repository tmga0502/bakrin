import React from 'react';
import {useGetWantItems} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import ItemListWant from "@/react/app/mainApp/features/item/item-list-want";

const ListWantPage = () => {
	const { data: itemData } = useGetWantItems();
	return (
		<MainLayout>
			{itemData !== undefined ? (
				<ItemListWant itemData={itemData}/>
			):(
				<CanNotGetData/>
			)}
		</MainLayout>
	);
};

export default ListWantPage;
