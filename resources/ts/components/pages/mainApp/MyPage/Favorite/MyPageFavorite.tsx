import React, {useState} from 'react';
import {useGetFavoriteItems} from "@/ts/_api/query/ItemQuery";
import {useGetFavoriteProducers} from "@/ts/_api/query/ProducerQuery";
import {PageTitle} from "@/ts/components/ui/title";
import {Tab} from "@/ts/components/ui/tab";
import {ItemPanel} from "@/ts/components/model/item/ItemPanel/ItemPanel";
import {ProducerPanel} from "@/ts/components/model/producer/ProducerPanel/ProducerPanel";
import {MainAppLayout} from "@/ts/components/ui/layout";
import {GridBox} from "@/ts/components/ui/box";

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
