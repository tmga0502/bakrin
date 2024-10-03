import React, {useState} from 'react';
import {useGetFavoriteItems} from "@/react/api/query/ItemQuery";
import {useGetFavoriteProducers} from "@/react/api/query/ProducerQuery";
import {PageTitle} from "@/react/app/mainApp/components/title";
import Tab from "@/react/app/mainApp/components/layout/tab/Tab/Tab";
import GridBox from "@/react/app/mainApp/components/layout/GridBox/GridBox";
import {ListItemPanel, ListProducerPanel} from "@/react/app/mainApp/components/layout/panel";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";

const MyPageFavorite = () => {
	const { data: ItemData } = useGetFavoriteItems()
	const { data: ProducerData} = useGetFavoriteProducers()
	const [viewMode, setViewMode] = useState('アイテム')
	const tabMenu = ['アイテム', '生産者']

	return (
		<MainLayout>
			<PageTitle en={'favorite'} jp={'お気に入り'}/>
			<Tab mode={viewMode} setMode={setViewMode} tabMenu={tabMenu}/>
			{viewMode === 'アイテム' ? (
				<GridBox>
					{ItemData?.map(item => (
						<ListItemPanel data={item} key={item.id}/>
					))}
				</GridBox>
			):(
				<GridBox>
					{ProducerData?.map(item => (
						<ListProducerPanel data={item} key={item.id}/>
					))}
				</GridBox>
			)}
		</MainLayout>
	);
};

export default MyPageFavorite;
