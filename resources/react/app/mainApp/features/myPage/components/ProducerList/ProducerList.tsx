import React from 'react';
import GridBox from "@mainLayouts/GridBox/GridBox";
import {ProducersDataType} from "@mainFeatures/myPage/types";
import {UserPanelForList} from "@mainFeatures/user/components";

const ProducerList: React.FC<ProducersDataType> = ({producersData}) => {
	return (
		<GridBox>
			{producersData?.map(producerData => (
				<UserPanelForList data={producerData} key={producerData.id}/>
			))}
		</GridBox>
	);
};

export default ProducerList;
