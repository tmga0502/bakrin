import React, {useState} from 'react';
import {useGetFavoriteItems} from "@/react/api/query/ItemQuery";
import {useGetFavoriteProducers} from "@/react/api/query/ProducerQuery";
import {PageTitle} from "@/react/app/mainApp/components/title";
import {Tab} from "@/react/app/mainApp/components/tab";
import {ItemPanel} from "@/react/app/mainApp/features/item/ItemPanel/ItemPanel";
import {ProducerPanel} from "@/react/app/mainApp/features/producer/ProducerPanel/ProducerPanel";
import {MainAppLayout} from "@/react/app/mainApp/components/layout";
import {GridBox} from "@/react/app/mainApp/components/box";

const MyPageFavorite = () => {
	const { data: ItemData } = useGetFavoriteItems()
	const { data: ProducerData} = useGetFavoriteProducers()
	const [viewMode, setViewMode] = useState('アイテム')
	const tabMenu = ['アイテム', '生産者']
	return (
		<MainAppLayout>
			<PageTitle en={'favorite'} jp={'お気に入り'}/>
			<Tab mode={viewMode} setMode={setViewMode} tabMenu={tabMenu}/>
			{viewMode === 'アイテム' ? (
				<GridBox>
					{ItemData?.map(item => (
						<ItemPanel data={item} key={item.id}/>
					))}
				</GridBox>
			):(
				<GridBox>
					{ProducerData?.map(item => (
						<ProducerPanel data={item} key={item.id}/>
					))}
				</GridBox>
			)}
		</MainAppLayout>
	);
};

export default MyPageFavorite;
