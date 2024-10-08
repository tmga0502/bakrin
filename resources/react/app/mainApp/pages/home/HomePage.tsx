import React from 'react';
import {useGetFavoriteItems, useGetNewArrivalItems, useGetSeasonItems, useGetWantItems} from "@/react/api/query/ItemQuery";
import {useGetPopularProducers} from "@/react/api/query/ProducerQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import Home from "@/react/app/mainApp/features/home";

const HomePage = () => {
	//新着アイテム
	const { data: newArrivalItems } = useGetNewArrivalItems();
	//欲しいものリスト
	const { data: wantItems } = useGetWantItems();
	//旬のアイテム
	const { data: seasonItems } = useGetSeasonItems();
	//マイリスト(お気に入り登録済みリスト)
	const { data: favoriteItems } = useGetFavoriteItems();
	// //人気のユーザー
	const { data: popularProducers } = useGetPopularProducers();

    return (
		<MainLayout>
			{
				newArrivalItems !== undefined &&
				wantItems !== undefined &&
				seasonItems !== undefined &&
				favoriteItems !== undefined &&
				popularProducers !== undefined ? (
					<Home
						newArrivalItemsData={newArrivalItems}
						wantItemsData={wantItems}
						seasonItemsData={seasonItems}
						favoriteItemsData={favoriteItems}
						popularProducersData={popularProducers}
					/>
				): (
					<CanNotGetData/>
				)
			}
		</MainLayout>

	);
};

export default HomePage;
