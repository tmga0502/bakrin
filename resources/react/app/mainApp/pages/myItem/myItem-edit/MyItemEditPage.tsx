
import {useParams} from "react-router-dom";
import {useGetMyItem} from "@/react/api/query/ItemQuery";
import React, {ReactNode} from "react";
import {useGetCategories} from "@/react/api/query/CategoryQuery";
import {useGetUnits} from "@/react/api/query/UnitQuery";
import {useGetPlans} from "@/react/api/query/PlanQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import ContentsLoader from "@mainLayouts/Loader/ContentsLoader/ContentsLoader";
import {AuthorisedError, CanNotGetData} from "@mainLayouts/error";
import {useGetVarieties} from "@/react/api/query/VarietyQuery";
import {PageTitle} from "@mainElements/title";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import MyItemEditContents from "@mainFeatures/myItem/contents/MyItemEditContents";
import {useRecoilValue} from "recoil";
import {AuthorisedErrorState} from "@/react/app/mainApp/states/ErrorStates";

const MyItemEditPage = () => {
	const params = useParams()
	const {data: itemData, isLoading} = useGetMyItem(params.itemUuid)
	const {data: categoriesData, isLoading:categoriesLoading} = useGetCategories();
	const {data: varietiesData = [], isLoading: varietiesLoading} = useGetVarieties();
	const {data: unitData, isLoading:unitDataLoading} = useGetUnits();
	const {data: planData, isLoading:planDataLoading} = useGetPlans();
	const authError = useRecoilValue(AuthorisedErrorState)

	let contents: ReactNode
	if(isLoading || categoriesLoading || varietiesLoading || unitDataLoading || planDataLoading) {
		contents = <ContentsLoader/>
	}else if(authError){
		contents = <AuthorisedError/>
	}else if (!itemData || !categoriesData || !varietiesData || !unitData || !planData) {
		contents = <CanNotGetData/>
	}else{
		contents = 	<MyItemEditContents
			itemData={itemData}
			categoriesData={categoriesData}
			varietiesData={varietiesData}
			unitData={unitData}
			planData={planData}
		/>
	}

	return (
	  <MainLayout>
		  <PageTitle en={'MY ITEM EDIT'} jp={'アイテム編集'}/>
		  <ContainerSm>
			  {contents}
		  </ContainerSm>
	  </MainLayout>
	);
};

export default MyItemEditPage;
