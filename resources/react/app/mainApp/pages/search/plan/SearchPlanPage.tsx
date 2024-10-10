import React from 'react';
import {useGetPlans} from "@/react/api/query/PlanQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {PlanSearchForm} from "@mainFeatures/search/components";
import GridBox from "@mainLayouts/GridBox/GridBox";
import {ItemPanelForList} from "@mainFeatures/item/components";
import {useRecoilValue} from "recoil";
import {SearchPlanResultStates} from "@/react/app/mainApp/states/SearchPlanStates";

const SearchPlanPage = () => {
	const {data: planData = []} = useGetPlans();
	const searchPlanResult = useRecoilValue(SearchPlanResultStates);

	return (
		<MainLayout>
			<PlanSearchForm planData={planData}/>
			<GridBox>
				{searchPlanResult.map((item: any) => (
					<ItemPanelForList itemData={item} key={item.id}/>
				))}
			</GridBox>
		</MainLayout>
	);
};

export default SearchPlanPage;
