import React from 'react';
import GridBox from "@mainLayouts/GridBox/GridBox";
import {ProducersDataType} from "@mainFeatures/myPage/types";
import {ProducerPanelForList} from "@mainFeatures/producer/components";

const ProducerList: React.FC<ProducersDataType> = ({producersData}) => {
	return (
		<GridBox>
			{producersData?.map(producerData => (
				<ProducerPanelForList data={producerData} key={producerData.id}/>
			))}
		</GridBox>
	);
};

export default ProducerList;
