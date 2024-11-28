import React from 'react';
import {PlanSearchForm} from "@mainFeatures/search/components";
import GridBox from "@mainLayouts/GridBox/GridBox";
import {ItemPanelForList} from "@mainFeatures/item/components";
import {PlanPropsType} from "@mainFeatures/search/types";
import {useRecoilValue} from "recoil";
import {SearchPlanResultStates} from "@/react/app/mainApp/states/SearchPlanStates";

const SearchPlanContext: React.FC<PlanPropsType> = ({planDatas}) => {
	const searchPlanResult = useRecoilValue(SearchPlanResultStates);

	return (
		<>
			<PlanSearchForm planDatas={planDatas}/>
			<GridBox>
				{searchPlanResult.map((item: any) => (
					<ItemPanelForList itemData={item} key={item.id}/>
				))}
			</GridBox>
		</>
	);
};

export default SearchPlanContext;
