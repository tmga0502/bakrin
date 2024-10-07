import React from 'react';
import {ProducerType} from "@/react/types/ProducerType";
import {useRecoilValue} from "recoil";
import {SearchProducerResultStates} from "@/react/app/mainApp/states/SearchProducerStates";
import GridBox from "@/react/app/mainApp/components/layout/GridBox/GridBox";
import {ListProducerPanel} from "@/react/app/mainApp/components/layout/panel";
import Form from "@/react/app/mainApp/features/search/search-producer/components/Form/Form";

const Index = () => {
	const searchProducerResult = useRecoilValue(SearchProducerResultStates)
	return (
		<>
			<Form/>
			<GridBox>
				{searchProducerResult.map((item: ProducerType) => (
					<ListProducerPanel data={item} key={item.id}/>
				))}
			</GridBox>
		</>
	);
};

export default Index;
