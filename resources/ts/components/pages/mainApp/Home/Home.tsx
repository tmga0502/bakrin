import React from 'react';
import {ItemType} from "@/ts/types/ItemType";
import {useGetFavoriteItems, useGetNewArrivalItems, useGetSeasonItems, useGetWantItems} from "@/ts/_api/query/ItemQuery";
import {useGetPopularProducers} from "@/ts/_api/query/ProducerQuery";
import {ProducerType} from "@/ts/types/ProducerType";
import {TopItemList} from "@/ts/components/model/item/ItemList/ItemList";
import {ItemPanel} from "@/ts/components/model/item/ItemPanel/ItemPanel";
import {TopProducerList} from "@/ts/components/model/producer/ProducerList/ProducerList";
import {ProducerPanel} from "@/ts/components/model/producer/ProducerPanel/ProducerPanel";
import {MainAppLayout} from "@/ts/components/ui/layout";

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
			{newArrivalItems && (
				<TopItemList title={'新着'} moreLink={'/item'}>
					{newArrivalItems.slice(0, 6).map((item: ItemType) =>(
						<ItemPanel data={item} key={item.id}/>
					))}
				</TopItemList>
			)}

			{wantItems && (
				<TopItemList title={'欲しいものリスト'} moreLink={'/item'}>
					{wantItems.slice(0, 6).map((item: ItemType) =>(
						<ItemPanel data={item} key={item.id}/>
					))}
				</TopItemList>
			)}

			{seasonItems && (
				<TopItemList title={'今が旬'} moreLink={'/item'}>
					{seasonItems.slice(0, 6).map((item: ItemType) =>(
						<ItemPanel data={item} key={item.id}/>
					))}
				</TopItemList>
			)}

			{favoriteItems && (
				<TopItemList title={'お気に入りリスト'} moreLink={'/item'}>
					{favoriteItems.slice(0, 6).map((item: ItemType) =>(
						<ItemPanel data={item} key={item.id}/>
					))}
				</TopItemList>
			)}

			{popularProducers && (
				<TopProducerList title={'注目ユーザー'} moreLink={'/item'}>
					{popularProducers.slice(0, 6).map((item: ProducerType) =>(
						<ProducerPanel data={item} key={item.id}/>
					))}
				</TopProducerList>
			)}

		</MainAppLayout>


    );

};

export default Home;
