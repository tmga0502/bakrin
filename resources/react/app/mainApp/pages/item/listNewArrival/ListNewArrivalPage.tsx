import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import {useGetNewArrivalItems} from "@/react/api/query/ItemQuery";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import ItemListNewArrival from "@/react/app/mainApp/features/item/item-list-newArrival";

const ListNewArrivalPage = () => {
	//新着アイテム
	const { data: itemData } = useGetNewArrivalItems();
	return (
		<MainLayout>
			{itemData !== undefined ? (
				<ItemListNewArrival itemData={itemData}/>
			):(
				<CanNotGetData/>
			)}
		</MainLayout>
	);
};

export default ListNewArrivalPage;
