import React from 'react';
import {PlanType} from "@/react/types/PlanType";
import axios from "axios";
import {ItemType} from "@/react/types/ItemType";
import {useForm} from "react-hook-form";
import {useSetRecoilState} from "recoil";
import {SearchPlanListStates, SearchPlanResultStates} from "@/react/app/mainApp/states/SearchPlanStates";
import {FormGroup} from "@mainLayouts/form";
import MainButton from "@mainElements/button/MainButton/MainButton";
import CheckBox from "@mainElements/form/CheckBox/CheckBox";
import {PlanPropsType} from "@mainFeatures/search/types";

const PlanSearchForm: React.FC<PlanPropsType> = ({planDatas}) => {
	const {register, handleSubmit, reset} = useForm();
	const setSearchPlanList = useSetRecoilState(SearchPlanListStates);
	const setSearchPlanResult = useSetRecoilState(SearchPlanResultStates);

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
	return (
		<div className={'w-full bg-white px-4 py-2 mb-8'}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={'flex items-center gap-5 lg:mb-0'}>
					{planDatas.map((plan: PlanType) => (
						<FormGroup key={plan.id}>
							<CheckBox text={plan.name} value={plan.id} {...register('plan')}/>
						</FormGroup>
					))}
				</div>
				<div className={'w-[70%] flex gap-4 justify-end mt-1 mx-auto text-center sm:w-1/2 sm:ml-auto md:w-[30%]'}>
					<MainButton text={'検索'} color={'mainGreen'} type={'submit'} size={'sm'} width={'full'}/>
					<MainButton text={'リセット'} color={'default'} type={'button'} size={'sm'} width={'full'} onClick={handleReset}/>
				</div>
			</form>
		</div>
	);
};

export default PlanSearchForm;
