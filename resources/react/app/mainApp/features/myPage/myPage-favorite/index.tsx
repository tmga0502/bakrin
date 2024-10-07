import React, {useState} from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import Tab from "@/react/app/mainApp/components/layout/tab/Tab/Tab";
import {IndexType} from "./types/type";
import ItemList from "@/react/app/mainApp/features/myPage/myPage-favorite/components/ItemList/ItemList";
import ProducerList from "@/react/app/mainApp/features/myPage/myPage-favorite/components/ProducerList/ProducerList";

const Index: React.FC<IndexType> = ({ItemData, ProducerData}) => {
	const [viewMode, setViewMode] = useState('アイテム')
	const tabMenu = ['アイテム', '生産者']

	return (
		<>
			<PageTitle en={'favorite'} jp={'お気に入り'}/>
			<Tab mode={viewMode} setMode={setViewMode} tabMenu={tabMenu}/>
			{viewMode === 'アイテム' ? (
				<ItemList ItemData={ItemData}/>
			):(
				<ProducerList ProducerData={ProducerData}/>
			)}
		</>
	);
};

export default Index;
