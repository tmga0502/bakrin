import React from 'react';
import {ItemType} from "@/react/types/ItemType";
import {useGetFavoriteItems, useGetNewArrivalItems, useGetSeasonItems, useGetWantItems} from "@/react/api/query/ItemQuery";
import {useGetPopularProducers} from "@/react/api/query/ProducerQuery";
import {ProducerType} from "@/react/types/ProducerType";
import {ItemPanel, ProducerPanel} from "@/react/app/mainApp/features/panel";
import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import * as HomeFT from "./features/idnex";

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
		<MainAppLayout>
			<HomeFT.ListBox title={'新着'} moreLink={'/item'}>
				{newArrivalItems?.slice(0, 6).map((item: ItemType) =>(
					<ItemPanel data={item} key={item.id}/>
				))}
			</HomeFT.ListBox>

			<HomeFT.ListBox title={'欲しいものリスト'} moreLink={'/item'}>
				{wantItems?.slice(0, 6).map((item: ItemType) =>(
					<ItemPanel data={item} key={item.id}/>
				))}
			</HomeFT.ListBox>

			<HomeFT.ListBox title={'今が旬'} moreLink={'/item'}>
				{seasonItems?.slice(0, 6).map((item: ItemType) =>(
					<ItemPanel data={item} key={item.id}/>
				))}
			</HomeFT.ListBox>

			<HomeFT.ListBox title={'お気に入りリスト'} moreLink={'/item'}>
				{favoriteItems?.slice(0, 6).map((item: ItemType) =>(
					<ItemPanel data={item} key={item.id}/>
				))}
			</HomeFT.ListBox>

			<HomeFT.ListBox title={'注目ユーザー'} moreLink={'/item'}>
				{popularProducers?.slice(0, 6).map((item: ProducerType) =>(
					<ProducerPanel data={item} key={item.id}/>
				))}
			</HomeFT.ListBox>

		</MainAppLayout>


    );

};

export default Home;
