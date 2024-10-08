import React from 'react';
import {ProducerType} from "@/react/types/ProducerType";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import {ProducerList} from "@/react/app/mainApp/components/layout/producer/producerList/ProducerList";

type IndexType = {
	data: ProducerType[];
}

const Index: React.FC<IndexType>  = ({data}) => {
	return (
		<>
			<PageTitle en={'producers'} jp={'注目の生産者一覧'}/>
			<ProducerList data={data}/>
		</>
	);
};

export default Index;
