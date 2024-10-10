import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import ProducerSearchForm from "@mainFeatures/search/components/ProducerSearchForm/ProducerSearchForm";
import GridBox from "@mainLayouts/GridBox/GridBox";
import {ProducerType} from "@/react/types/ProducerType";
import {ListProducerPanel} from "@mainLayouts/panel";
import {useRecoilValue} from "recoil";
import {SearchProducerResultStates} from "@/react/app/mainApp/states/SearchProducerStates";

const SearchProducerPage = () => {
	const searchProducerResult = useRecoilValue(SearchProducerResultStates)
	return (
		<MainLayout>
			<ProducerSearchForm/>
			<GridBox>
				{searchProducerResult.map((item: ProducerType) => (
					<ListProducerPanel data={item} key={item.id}/>
				))}
			</GridBox>
		</MainLayout>
	);
};

export default SearchProducerPage;
