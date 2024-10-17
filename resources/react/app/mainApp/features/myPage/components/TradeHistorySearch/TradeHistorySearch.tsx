import React from 'react';
import { Wrapper, InputBoxStyle } from './TradeHistorySearch.styled';
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
		<div css={Wrapper}>
			<div css={InputBoxStyle}>
				<Input type={'month'} defaultValue={viewHistoryMonth} {...register('month')}/>
				<MainButton text={'検索'} color={'default'} type={'button'} onClick={handleChangeViewMonth}/>
			</div>
		</div>
	);
};

export default TradeHistorySearch;
