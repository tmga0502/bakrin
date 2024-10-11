import React, {ReactNode} from "react";
import {useGetCategories} from "@/react/api/query/CategoryQuery";
import {useGetUnits} from "@/react/api/query/UnitQuery";
import {useGetPlans} from "@/react/api/query/PlanQuery";
import {useGetVarieties} from "@/react/api/query/VarietyQuery";
import {PageTitle} from "@mainElements/title";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {CanNotGetData} from "@mainLayouts/error";
import MyItemNewContents from "@mainFeatures/myItem/contents/MyItemNewContents";

const MyItemNewPage = () => {
	const {data: categoriesData = [], isLoading: categoriesLoading} = useGetCategories();
	const {data: varietiesData = [], isLoading: varietiesLoading} = useGetVarieties();
	const {data: unitData =[], isLoading: unitDataLoading} = useGetUnits();
	const {data: planData = [], isLoading: planDataLoading} = useGetPlans();

	let contents: ReactNode
	if(categoriesLoading || varietiesLoading || unitDataLoading || planDataLoading) {
		contents = <ContentsLoader/>
	}else if (!categoriesData || !varietiesData || !unitData || !planData) {
		contents = <CanNotGetData/>
	}else{
		contents = 	<MyItemNewContents
						categoriesData={categoriesData}
						varietiesData={varietiesData}
						unitData={unitData}
						planData={planData}
					/>
	}

	return (
		<MainLayout>
			<PageTitle en={'MY ITEM'} jp={'アイテム新規登録'}/>
			<ContainerSm>
				{contents}
			</ContainerSm>

		</MainLayout>
	);
};

export default MyItemNewPage;
