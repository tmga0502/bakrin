import React from 'react';
import {ButtonBox, CheckBoxWrapper, Wrapper} from './PlanSearchForm.styles';
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
		console.log(data)
		const response = await axios.post<ItemType[]>(`/api/items/searchPlan`, data);
		setSearchPlanResult(response.data)
	}

	const handleReset = () => {
		reset()
		setSearchPlanList([])
		setSearchPlanResult([])
	}
	return (
		<div css={Wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div css={CheckBoxWrapper}>
					{planDatas.map((plan: PlanType) => (
						<FormGroup key={plan.id}>
							<CheckBox text={plan.name} value={plan.id} {...register('plan')}/>
						</FormGroup>
					))}
				</div>
				<div css={ButtonBox}>
					<MainButton text={'検索'} color={'mainGreen'} type={'submit'} size={'sm'} width={'full'}/>
					<MainButton text={'リセット'} color={'default'} type={'button'} size={'sm'} width={'full'} onClick={handleReset}/>
				</div>
			</form>
		</div>
	);
};

export default PlanSearchForm;
