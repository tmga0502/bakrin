import React, {ReactNode} from 'react';
import {useGetPlans} from "@/react/api/query/PlanQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";
import SearchPlanContents from "@mainFeatures/search/contents/SearchPlanContents";

const SearchPlanPage = () => {
	const {data: planData, isLoading} = useGetPlans();

	let contents: ReactNode
	if(isLoading){
		contents = <ContentsLoader/>
	}else if (!planData){
		contents = <CanNotGetData/>
	}else{
		contents = 	<SearchPlanContents planDatas={planData}/>
	}

	return (
		<MainLayout>
			{contents}
		</MainLayout>
	);
};

export default SearchPlanPage;
