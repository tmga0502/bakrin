import React from 'react';
import {ProducerListType} from "./ProducerList.type";
import GridBox from "@mainLayouts/GridBox/GridBox";
import {ProducerPanelForList} from "@mainFeatures/producer/components";

const ProducerList: React.FC<ProducerListType> = ({producerList, slice}) => {
	const List = slice === undefined ? producerList : producerList.slice(0, slice)
	return (
		<GridBox>
			{List.map((producer) => (
				<ProducerPanelForList data={producer} key={producer.id}/>
			))}
		</GridBox>
	);
};

export default ProducerList;
