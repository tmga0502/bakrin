import React from 'react';
import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {FormProvider, useForm} from "react-hook-form";
import {MainButton} from "@/react/app/mainApp/components/button";
import axios from "axios";
import {GridBox} from "@/react/app/mainApp/features/layout/index";
import {useGetPlans} from "@/react/api/query/PlanQuery";
import Loader from "@/react/app/mainApp/features/loader/Loader";
import {PlanType} from "@/react/types/PlanType";
import CheckBox from "@/react/app/mainApp/components/form/CheckBox/CheckBox";
import { ItemType } from '@/react/types/ItemType';
import {ItemPanel} from "@/react/app/mainApp/features/panel";
import {useRecoilState} from "recoil";
import {SearchPlanListStates, SearchPlanResultStates} from "@/react/app/mainApp/states/SearchPlanStates";

const SearchPlan = () => {
	const {data: planData} = useGetPlans();
	const methods = useForm();
	const {handleSubmit, reset} = methods
	const [searchPlanList, setSearchPlanList] = useRecoilState(SearchPlanListStates);
	const [searchPlanResult, setSearchPlanResult] = useRecoilState(SearchPlanResultStates);
	const searchPlanIds: number[] = searchPlanList.map(plan => Number(plan));

	const onSubmit = async (data: any) => {
		if (data.plan === false) {
			setSearchPlanList([])
		}else{
			setSearchPlanList(data.plan)
		}
		const response = await axios.post<ItemType[]>(`/api/items/searchPlan`, data);
		setSearchPlanResult(response.data)
	}

	const handleReset = () => {
		reset()
		setSearchPlanList([])
		setSearchPlanResult([])
	}

	if(planData === undefined) return <Loader/>
	return (
		<MainAppLayout>
			<div className={'w-full bg-white py-2 px-4 mb-8'}>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)} className={'lg:flex lg:justify-between lg:"items-center'}>
						<div className={'sm:flex sm:gap-4 sm:items-center mb-4 lg:mb-0'}>
							{planData.map((plan:PlanType) => (
								<CheckBox id={`plan${plan.id}`} label={plan.name} name={'plan'} defaultValue={plan.id} defaultChecked={searchPlanIds.includes(plan.id)} key={plan.id}/>
							))}
						</div>
						<div className={'mt-1 text-center flex gap-4 justify-center sm:justify-end'}>
							<MainButton value={'検索'} color={'mainGreen'} type={'submit'} size={'sm'}/>
							<MainButton value={'リセット'} color={'default'} type={'button'} size={'sm'} onClick={handleReset}/>
						</div>
					</form>
				</FormProvider>
			</div>

			<GridBox>
				{searchPlanResult.map((item: any) =>(
					<ItemPanel data={item} key={item.id}/>
				))}
			</GridBox>
		</MainAppLayout>
	);
};

export default SearchPlan;
