import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import ProducerSearchForm from "@mainFeatures/search/components/ProducerSearchForm/ProducerSearchForm";
import GridBox from "@mainLayouts/GridBox/GridBox";
import {ProducerType} from "@/react/types/ProducerType";
import {useRecoilValue} from "recoil";
import {SearchProducerResultStates} from "@/react/app/mainApp/states/SearchProducerStates";
import {ProducerPanelForList} from "@mainFeatures/producer/components";

const SearchProducerPage = () => {
	const searchProducerResult = useRecoilValue(SearchProducerResultStates)
	return (
		<MainLayout>
			<ProducerSearchForm/>
			<GridBox>
				{searchProducerResult.map((item: ProducerType) => (
					<ProducerPanelForList data={item} key={item.id}/>
				))}
			</GridBox>
		</MainLayout>
	);
};

export default SearchProducerPage;
