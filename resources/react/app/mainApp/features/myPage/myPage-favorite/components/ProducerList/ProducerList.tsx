import React from 'react';
import {ListProducerPanel} from "@/react/app/mainApp/components/layout/panel";
import GridBox from "@/react/app/mainApp/components/layout/GridBox/GridBox";
import {ProducerLitType} from "@/react/app/mainApp/features/myPage/myPage-favorite/types/type";

const ProducerList: React.FC<ProducerLitType> = ({ProducerData}) => {
	return (
		<GridBox>
			{ProducerData?.map(item => (
				<ListProducerPanel data={item} key={item.id}/>
			))}
		</GridBox>
	);
};

export default ProducerList;
