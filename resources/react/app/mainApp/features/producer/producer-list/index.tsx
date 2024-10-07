import React from 'react';
import {ProducerType} from "@/react/types/ProducerType";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import {List} from './components/List/List'

type IndexType = {
	data: ProducerType[];
}

const Index: React.FC<IndexType>  = ({data}) => {
	return (
		<>
			<PageTitle en={'producers'} jp={'生産者一覧'}/>
			<List data={data}/>
		</>
	);
};

export default Index;
