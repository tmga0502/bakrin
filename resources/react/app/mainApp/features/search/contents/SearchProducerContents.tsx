import React from 'react';
import ProducerSearchForm from "../components/ProducerSearchForm/ProducerSearchForm";
import GridBox from "@mainLayouts/GridBox/GridBox";
import {UserType} from "@/react/types/UserType";
import {ProducerPanelForList} from "@mainFeatures/producer/components";
import {useRecoilValue} from "recoil";
import {SearchProducerResultStates} from "@/react/app/mainApp/states/SearchProducerStates";

const SearchProducerContents = () => {
	const searchProducerResult = useRecoilValue(SearchProducerResultStates)

	return (
		<>
			<ProducerSearchForm/>
			<GridBox>
				{searchProducerResult.map((item: UserType) => (
					<ProducerPanelForList data={item} key={item.id}/>
				))}
			</GridBox>
		</>
	);
};

export default SearchProducerContents;
