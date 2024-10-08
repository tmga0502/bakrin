import React from 'react';
import {useGetSeasonItems} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import ItemListSeason from "@/react/app/mainApp/features/item/item-list-season";

const ListSeasonPage = () => {
	const { data: itemData } = useGetSeasonItems();
	return (
		<MainLayout>
			{itemData !== undefined ? (
				<ItemListSeason itemData={itemData}/>
			):(
				<CanNotGetData/>
			)}
		</MainLayout>
	);
};

export default ListSeasonPage;
