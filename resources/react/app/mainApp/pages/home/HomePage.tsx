import React from 'react';
import {useGetNewArrivalItems, useGetWantItems , useGetFavoriteItems, useGetSeasonItems} from "@/react/api/query/ItemQuery";
import {useGetPopularUsers} from "@/react/api/query/UserQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {SectionTitle} from "@mainElements/title";
import {ItemList} from "@mainFeatures/item/components";
import {UserList} from "@mainFeatures/user/components";

const HomePage = () => {
	const { data: newArrivalItems = [] } = useGetNewArrivalItems();//新着アイテム
	const { data: wantItems = [] } = useGetWantItems();//欲しいものリスト
	const { data: seasonItems = [] } = useGetSeasonItems();//旬のアイテム
	const { data: favoriteItems = [] } = useGetFavoriteItems();//マイリスト(お気に入り登録済みリスト)
	const { data: popularUsers = [] } = useGetPopularUsers();//人気のユーザー

    return (
		<MainLayout>
			<div className={'mb-14'}>
				<SectionTitle title={'新着'} moreLink={'/items/newArrival'}/>
				<ItemList itemList={newArrivalItems} slice={6}/>
			</div>

			<div className={'mb-14'}>
				<SectionTitle title={'欲しいものリスト'} moreLink={'/items/want'}/>
				<ItemList itemList={wantItems} slice={6}/>
			</div>

			<div className={'mb-14'}>
				<SectionTitle title={'今が旬'} moreLink={'/items/season'}/>
				<ItemList itemList={seasonItems} slice={6}/>
			</div>

			<div className={'mb-14'}>
				<SectionTitle title={'お気に入りリスト'} moreLink={'/items/favorite'}/>
				<ItemList itemList={favoriteItems} slice={6}/>
			</div>

			<div className={'mb-14'}>
				<SectionTitle title={'注目の生産者'} moreLink={'/producers/featured'}/>
				<UserList usersData={popularUsers} slice={6}/>
			</div>
		</MainLayout>

	);
};

export default HomePage;
