import React from 'react';
import {useGetFavoriteItems, useGetNewArrivalItems, useGetSeasonItems, useGetWantItems} from "@/react/api/query/ItemQuery";
import {useGetPopularProducers} from "@/react/api/query/ProducerQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import ItemsList from "@/react/app/mainApp/features/home/components/ItemsList/ItemsList";
import ProducersList from "@/react/app/mainApp/features/home/components/ProducersList/ProducersList";

const Home = () => {
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
			<ItemsList title={'新着'} moreLink={'/items'} data={newArrivalItems}/>
			<ItemsList title={'欲しいものリスト'} moreLink={'/items'} data={wantItems}/>
			<ItemsList title={'今が旬'} moreLink={'/items'} data={seasonItems}/>
			<ItemsList title={'お気に入りリスト'} moreLink={'/items'} data={favoriteItems}/>
			<ProducersList title={'注目ユーザー'} moreLink={'/items'} data={popularProducers}/>
		</MainLayout>

	);
};

export default Home;
