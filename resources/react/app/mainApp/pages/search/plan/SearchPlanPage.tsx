import React, {ReactNode} from 'react';
import {useGetPlans} from "@/react/api/query/PlanQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";
import SearchPlanContext from "@mainFeatures/search/context/SearchPlanContext";

const SearchPlanPage = () => {
	const {data: planData, isLoading} = useGetPlans();

	let contents: ReactNode
	if(isLoading){
		contents = <ContentsLoader/>
	}else if (!planData){
		contents = <CanNotGetData/>
	}else{
		contents = 	<SearchPlanContext planDatas={planData}/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default SearchPlanPage;
