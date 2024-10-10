import React, {useEffect} from "react";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {useGetCategories} from "@/react/api/query/CategoryQuery";
import {useGetUnits} from "@/react/api/query/UnitQuery";
import {useGetPlans} from "@/react/api/query/PlanQuery";
import {useGetVarieties} from "@/react/api/query/VarietyQuery";
import {useSetRecoilState} from "recoil";
import {categoryDataState, planDataState, unitDataState, varietiesDataState} from './states/atom'
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import ContainerSm from "@/react/app/mainApp/components/layouts/container/ContainerSm/ContainerSm";
import Form from "@/react/app/mainApp/pages/myItem/myItem-new/components/Form/Form";

const Index = () => {
	const {data: categoryData = []} = useGetCategories();
	const {data: varietiesData = []} = useGetVarieties();
	const {data: unitData =[]} = useGetUnits();
	const {data: planData = []} = useGetPlans();
	const setCategoryData = useSetRecoilState(categoryDataState)
	const setVarietiesData = useSetRecoilState(varietiesDataState)
	const setUnitData = useSetRecoilState(unitDataState)
	const setPlanData = useSetRecoilState(planDataState)

	useEffect(() => {
		setCategoryData(categoryData)
		setVarietiesData(varietiesData)
		setUnitData(unitData)
		setPlanData(planData)
	}, [categoryData, varietiesData, unitData, planData]);

	return (
		<MainLayout>
			<PageTitle en={'MY ITEM'} jp={'アイテム新規登録'}/>
			<ContainerSm>
				<Form/>
			</ContainerSm>

		</MainLayout>
	);
};

export default Index;
