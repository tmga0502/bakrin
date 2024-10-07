import React from 'react';
import {useGetFavoriteItems} from "@/react/api/query/ItemQuery";
import {useGetFavoriteProducers} from "@/react/api/query/ProducerQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import MyPageFavorite from "@/react/app/mainApp/features/myPage/myPage-favorite";

const MyPageFavoritePage = () => {
	const { data: ItemData } = useGetFavoriteItems()
	const { data: ProducerData} = useGetFavoriteProducers()

	return (
		<MainLayout>
			{ItemData !== undefined && ProducerData !== undefined ? (
				<MyPageFavorite ItemData={ItemData} ProducerData={ProducerData}/>
			):(
				<CanNotGetData/>
			)}
		</MainLayout>
	);
};

export default MyPageFavoritePage;
