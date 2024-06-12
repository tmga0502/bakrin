import React, {useState} from 'react';
import {useGetFavoriteItems} from "@/ts/_api/query/ItemQuery";
import {useGetFavoriteProducers} from "@/ts/_api/query/ProducerQuery";
import {PageTitle} from "@/ts/components/ui/title/Title";
import _type from "@/ts/components/ui/tab/_type";
import {SearchItemList} from "@/ts/components/model/item/ItemList/ItemList";
import {ItemPanel} from "@/ts/components/model/item/ItemPanel/ItemPanel";
import {SearchProducerList} from "@/ts/components/model/producer/ProducerList/ProducerList";
import {ProducerPanel} from "@/ts/components/model/producer/ProducerPanel/ProducerPanel";
import {MainAppLayout} from "@/ts/components/ui/layout";

const MyPageFavorite = () => {
	const { data: ItemData } = useGetFavoriteItems()
	const { data: ProducerData} = useGetFavoriteProducers()
	const [viewMode, setViewMode] = useState('アイテム')
	const tabMenu = ['アイテム', '生産者']
	return (
		<MainAppLayout>
			<PageTitle en={'favorite'} jp={'お気に入り'}/>
			<_type mode={viewMode} setMode={setViewMode} tabMenu={tabMenu}/>
			{viewMode === 'アイテム' ? (
				<SearchItemList>
					{ItemData?.map(item => (
						<ItemPanel data={item} key={item.id}/>
					))}
				</SearchItemList>
			):(
				<SearchProducerList>
					{ProducerData?.map(item => (
						<ProducerPanel data={item} key={item.id}/>
					))}
				</SearchProducerList>
			)}
		</MainAppLayout>
	);
};

export default MyPageFavorite;
