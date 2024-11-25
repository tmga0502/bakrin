import React, {useState} from 'react';
import {useGetFavoriteItems} from "@/react/api/query/ItemQuery";
import {useGetFavoriteUsers} from "@/react/api/query/UserQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import Tab from "@mainLayouts/tab/Tab/Tab";
import {ItemList, ProducerList} from "@mainFeatures/myPage/components";

const MyPageFavoritePage = () => {
	const { data: ItemData = [] } = useGetFavoriteItems()
	const { data: ProducerData = []} = useGetFavoriteUsers()

	const [viewMode, setViewMode] = useState('アイテム')
	const tabMenu = ['アイテム', '生産者']


	return (
		<MainLayout>
			<PageTitle en={'favorite'} jp={'お気に入り'}/>
			<Tab mode={viewMode} setMode={setViewMode} tabMenu={tabMenu}/>
			{viewMode === 'アイテム' ? (
				<ItemList itemsData={ItemData}/>
			):(
				<ProducerList producersData={ProducerData}/>
			)}
		</MainLayout>
	);
};

export default MyPageFavoritePage;
