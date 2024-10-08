import React from 'react';
import ItemsList from "@/react/app/mainApp/features/home/components/ItemsList/ItemsList";
import ProducersList from "@/react/app/mainApp/features/home/components/ProducersList/ProducersList";
import {IndexType} from "@/react/app/mainApp/features/home/types/type";

const Index: React.FC<IndexType> = (props) => {
	const {
		newArrivalItemsData,
		wantItemsData,
		seasonItemsData,
		favoriteItemsData,
		popularProducersData,
	} = props
	return (
		<>
			<ItemsList title={'新着'} moreLink={'/items/newArrival'} data={newArrivalItemsData}/>
			<ItemsList title={'欲しいものリスト'} moreLink={'/items/want'} data={wantItemsData}/>
			<ItemsList title={'今が旬'} moreLink={'/items/season'} data={seasonItemsData}/>
			<ItemsList title={'お気に入りリスト'} moreLink={'/items/favorite'} data={favoriteItemsData}/>
			<ProducersList title={'注目の生産者'} moreLink={'/producers/featured'} data={popularProducersData}/>
		</>
	);
};

export default Index;
