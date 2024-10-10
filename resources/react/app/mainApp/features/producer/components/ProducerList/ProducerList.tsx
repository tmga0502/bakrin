import React from 'react';
import {ProducerListType} from "./ProducerList.type";
import {ListProducerPanel} from "@mainLayouts/panel";
import GridBox from "@mainLayouts/GridBox/GridBox";

const ProducerList: React.FC<ProducerListType> = ({producerList, slice}) => {
	const List = slice === undefined ? producerList : producerList.slice(0, slice)
	return (
		<GridBox>
			{List.map((producer) => (
				<ListProducerPanel data={producer} key={producer.id}/>
			))}
		</GridBox>
	);
};

export default ProducerList;
