import React from 'react';
import {ProducerType} from "@/react/types/ProducerType";
import {useRecoilValue} from "recoil";
import {SearchProducerResultStates} from "@/react/app/mainApp/states/SearchProducerStates";
import GridBox from "@/react/app/mainApp/components/layouts/GridBox/GridBox";
import {ListProducerPanel} from "@/react/app/mainApp/components/layouts/panel";
import ProducerSearchForm from "@mainFeatures/search/components/ProducerSearchForm/ProducerSearchForm";

const Index = () => {
	const searchProducerResult = useRecoilValue(SearchProducerResultStates)
	return (
		<>
			<ProducerSearchForm/>
			<GridBox>
				{searchProducerResult.map((item: ProducerType) => (
					<ListProducerPanel data={item} key={item.id}/>
				))}
			</GridBox>
		</>
	);
};

export default Index;
