import React from 'react';
import {Input} from "@mainElements/form";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {useForm} from "react-hook-form";
import {useRecoilState} from "recoil";
import {TradeHistoryDateStats} from "@mainFeatures/myPage/states/TradeHistoryStates";

const TradeHistorySearch = () => {

	const [viewHistoryMonth, setViewHistoryMonth] = useRecoilState(TradeHistoryDateStats);
	const {register, getValues} = useForm({defaultValues:{
		month: viewHistoryMonth
		}})

	const handleChangeViewMonth = () => {
		setViewHistoryMonth(getValues('month'))
	}

	return (
		<div className={'bg-bakGray rounded-md px-6 py-2 mb-6'}>
			<div className={'flex justify-between gap-12'}>
				<Input type={'month'} defaultValue={viewHistoryMonth} {...register('month')}/>
				<MainButton text={'検索'} color={'default'} type={'button'} onClick={handleChangeViewMonth}/>
			</div>
		</div>
	);
};

export default TradeHistorySearch;
