import React from 'react';
import {useRecoilValue} from "recoil";
import {SearchPlanResultStates} from "@/react/app/mainApp/states/SearchPlanStates";
import Form from "@/react/app/mainApp/features/search/search-plan/components/Form/Form";
import GridBox from "@/react/app/mainApp/components/layout/GridBox/GridBox";
import {ListItemPanel} from "@/react/app/mainApp/components/layout/panel";
import {SearchPlanType} from "@/react/app/mainApp/features/search/search-plan/types/type";

const Index: React.FC<SearchPlanType>= ({planData}) => {
	const searchPlanResult = useRecoilValue(SearchPlanResultStates);

	return (
		<>
			<Form planData={planData}/>
			<GridBox>
				{searchPlanResult.map((item: any) => (
					<ListItemPanel data={item} key={item.id}/>
				))}
			</GridBox>
		</>
	);
};

export default Index;
