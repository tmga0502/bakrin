import React from 'react';
import {ItemType} from "@/react/types/ItemType";
import {useGetFavoriteItems, useGetNewArrivalItems, useGetSeasonItems, useGetWantItems} from "@/react/api/query/ItemQuery";
import {useGetPopularProducers} from "@/react/api/query/ProducerQuery";
import {ProducerType} from "@/react/types/ProducerType";
import {ItemPanel} from "@/react/app/mainApp/features/item/ItemPanel/ItemPanel";
import {ProducerPanel} from "@/react/app/mainApp/features/producer/ProducerPanel/ProducerPanel";
import {MainAppLayout} from "@/react/app/mainApp/components//layout";
import {ListItem} from "@/react/app/mainApp/pages/Home/features";

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
