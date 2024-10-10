import React from 'react';
import {ListProducerPanel} from "@mainLayouts/panel";
import GridBox from "@mainLayouts/GridBox/GridBox";
import {ProducersDataType} from "@mainFeatures/myPage/types";

const ProducerList: React.FC<ProducersDataType> = ({producersData}) => {
	return (
		<GridBox>
			{producersData?.map(producerData => (
				<ListProducerPanel data={producerData} key={producerData.id}/>
			))}
		</GridBox>
	);
};

export default ProducerList;
