import React from 'react';
import {useGetPlans} from "@/react/api/query/PlanQuery";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import SearchPlan from "@/react/app/mainApp/features/search/search-plan";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";

const SearchPlanPage = () => {
	const {data: planData} = useGetPlans();

	return (
		<MainLayout>
			{planData !== undefined ? (
				<SearchPlan planData={planData}/>
			):(
				<CanNotGetData/>
			)}
		</MainLayout>
	);
};

export default SearchPlanPage;
