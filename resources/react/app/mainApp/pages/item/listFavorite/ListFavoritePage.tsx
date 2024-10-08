import React from 'react';
import {useGetFavoriteItems} from "@/react/api/query/ItemQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import ItemListFavorite from "@/react/app/mainApp/features/item/item-list-favorite";

const ListFavoritePage = () => {
	const { data: itemData } = useGetFavoriteItems();
	return (
		<MainLayout>
			{itemData !== undefined ? (
				<ItemListFavorite itemData={itemData}/>
			):(
				<CanNotGetData/>
			)}
		</MainLayout>
	);
};

export default ListFavoritePage;
