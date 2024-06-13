import React from 'react';
import {ItemType} from "@/ts/types/ItemType";
import {useGetFavoriteItems, useGetNewArrivalItems, useGetSeasonItems, useGetWantItems} from "@/ts/_api/query/ItemQuery";
import {useGetPopularProducers} from "@/ts/_api/query/ProducerQuery";
import {ProducerType} from "@/ts/types/ProducerType";
import {ItemPanel} from "@/ts/components/model/item/ItemPanel/ItemPanel";
import {ProducerPanel} from "@/ts/components/model/producer/ProducerPanel/ProducerPanel";
import {MainAppLayout} from "@/ts/components/ui/layout";
import {ListItem} from "@/ts/components/pages/mainApp/Home/features";

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
				<ListItem title={'新着'} moreLink={'/item'}>
					{newArrivalItems.slice(0, 6).map((item: ItemType) =>(
						<ItemPanel data={item} key={item.id}/>
					))}
				</ListItem>
			)}

			{wantItems && (
				<ListItem title={'欲しいものリスト'} moreLink={'/item'}>
					{wantItems.slice(0, 6).map((item: ItemType) =>(
						<ItemPanel data={item} key={item.id}/>
					))}
				</ListItem>
			)}

			{seasonItems && (
				<ListItem title={'今が旬'} moreLink={'/item'}>
					{seasonItems.slice(0, 6).map((item: ItemType) =>(
						<ItemPanel data={item} key={item.id}/>
					))}
				</ListItem>
			)}

			{favoriteItems && (
				<ListItem title={'お気に入りリスト'} moreLink={'/item'}>
					{favoriteItems.slice(0, 6).map((item: ItemType) =>(
						<ItemPanel data={item} key={item.id}/>
					))}
				</ListItem>
			)}

			{popularProducers && (
				<ListItem title={'注目ユーザー'} moreLink={'/item'}>
					{popularProducers.slice(0, 6).map((item: ProducerType) =>(
						<ProducerPanel data={item} key={item.id}/>
					))}
				</ListItem>
			)}

		</MainAppLayout>


    );

};

export default Home;
