import React from 'react';
// import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import {ProducerType} from "@/react/types/ProducerType";
import ShowPanel from "@/react/app/mainApp/features/producer/producer-show/components/ShowPanel/ShowPanel";
import Pr from "@/react/app/mainApp/features/producer/producer-show/components/Pr/Pr";
import ItemList from "@/react/app/mainApp/features/producer/producer-show/components/ItemList/ItemList";

type IndexType = {
	data: ProducerType
}

const Index: React.FC<IndexType> = ({data}) => {
	console.log(typeof data.items)
	return (
		<>
			<ShowPanel data={data}/>
			<Pr data={data}/>
			<ItemList itemData={data.items}/>
		</>
	);
};

export default Index;
