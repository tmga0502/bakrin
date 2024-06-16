import React from 'react';
import {MainAppLayout} from "@/ts/components/ui/layout";
import {FormProvider, useForm} from "react-hook-form";
import {MainButton} from "@/ts/components/ui/button";
import axios from "axios";
import {GridBox} from "@/ts/components/ui/box";
import {useGetPlans} from "@/ts/_api/query/PlanQuery";
import Loader from "@/ts/components/ui/loader/Loader";
import {PlanType} from "@/ts/types/PlanType";
import CheckBox from "@/ts/components/ui/form/CheckBox/CheckBox";
import { useSearchPlanContext } from '@/ts/hooks/SearchPlanContext/SearchPlanContext';
import { ItemType } from '@/ts/types/ItemType';
import {ItemPanel} from "@/ts/components/model/item/ItemPanel/ItemPanel";
import {useIsLoading} from "@/ts/hooks/IsLoadingContext";

const SearchPlan = () => {
	const {isLoading, setIsLoading} = useIsLoading();
	const {data: planData} = useGetPlans();
	const methods = useForm();
	const {handleSubmit, reset} = methods
	const {searchPlanList, setSearchPlanList, searchItemResults, setSearchItemResults} = useSearchPlanContext()

	const onSubmit = async (data: any) => {
		setIsLoading(true)
		if (data.plan === false) {
			setSearchPlanList([])
		}else{
			setSearchPlanList(data.plan)
		}
		const response = await axios.post<ItemType[]>(`/api/items/searchPlan`, data);
		setSearchItemResults(response.data)
		setIsLoading(false)
	}

	const handleReset = () => {
		reset()
		setSearchPlanList([])
		setSearchItemResults([])
	}

	if(planData === undefined) return <Loader/>
	return (
		<MainAppLayout>
			<div className={'w-full bg-white py-2 px-4 mb-8'}>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)} className={'lg:flex lg:justify-between lg:"items-center'}>
						<div className={'sm:flex sm:gap-4 sm:items-center mb-4 lg:mb-0'}>
							{planData.map((plan:PlanType) => (
								<CheckBox id={`plan${plan.id}`} label={plan.name} name={'plan'} defaultValue={plan.id} defaultChecked={searchPlanList.includes(String(plan.id))} key={plan.id}/>
							))}
						</div>
						<div className={'mt-1 text-center flex gap-4 justify-center sm:justify-end'}>
							<MainButton value={'検索'} color={'mainGreen'} type={'submit'} size={'sm'}/>
							<MainButton value={'リセット'} color={'default'} type={'button'} size={'sm'} onClick={handleReset}/>
						</div>
					</form>
				</FormProvider>
			</div>

			{isLoading ? <Loader/> : (
				<GridBox>
					{searchItemResults.map((item) =>(
						<ItemPanel data={item} key={item.id}/>
					))}
				</GridBox>
			)}
		</MainAppLayout>
	);
};

export default SearchPlan;
