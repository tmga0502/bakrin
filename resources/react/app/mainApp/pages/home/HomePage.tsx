import React from 'react';
import {useGetNewArrivalItems, useGetWantItems , useGetFavoriteItems, useGetSeasonItems} from "@/react/api/query/ItemQuery";
import {useGetPopularProducers} from "@/react/api/query/ProducerQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {SectionTitle} from "@mainElements/title";
import {ItemList} from "@mainFeatures/item/components";
import {ProducerList} from "@mainFeatures/producer/components";
import {SectionStyle} from "@mainFeatures/home/styles";

const HomePage = () => {
	const { data: newArrivalItems = [] } = useGetNewArrivalItems();//新着アイテム
	const { data: wantItems = [] } = useGetWantItems();//欲しいものリスト
	const { data: seasonItems = [] } = useGetSeasonItems();//旬のアイテム
	const { data: favoriteItems = [] } = useGetFavoriteItems();//マイリスト(お気に入り登録済みリスト)
	const { data: popularProducers = [] } = useGetPopularProducers();//人気のユーザー

    return (
		<MainLayout>
			<div css={SectionStyle}>
				<SectionTitle title={'新着'} moreLink={'/items/newArrival'}/>
				<ItemList itemList={newArrivalItems} slice={6}/>
			</div>

			<div css={SectionStyle}>
				<SectionTitle title={'欲しいものリスト'} moreLink={'/items/want'}/>
				<ItemList itemList={wantItems} slice={6}/>
			</div>

			<div css={SectionStyle}>
				<SectionTitle title={'今が旬'} moreLink={'/items/season'}/>
				<ItemList itemList={seasonItems} slice={6}/>
			</div>

			<div css={SectionStyle}>
				<SectionTitle title={'お気に入りリスト'} moreLink={'/items/favorite'}/>
				<ItemList itemList={favoriteItems} slice={6}/>
			</div>

			<div css={SectionStyle}>
				<SectionTitle title={'注目の生産者'} moreLink={'/producers/featured'}/>
				<ProducerList producerList={popularProducers} slice={6}/>
			</div>
		</MainLayout>

	);
};

export default HomePage;
