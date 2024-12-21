import React from 'react';
import {Input} from "@mainElements/form";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {useRecoilState} from "recoil";
import {useForm} from "react-hook-form";
import { InvoiceMonthStates } from '../../states/InvoiceMonthStates';

const InvoiceSearch = () => {
	const [viewInvoiceMonth, setViewInvoiceMonth] = useRecoilState(InvoiceMonthStates);
	const {register, getValues} = useForm({defaultValues:{
			month: viewInvoiceMonth
		}})

	const handleChangeViewMonth = () => {
		setViewInvoiceMonth(getValues('month'))
	}

	return (
		<div className={'bg-bakGray rounded-md px-6 py-2 mb-6'}>
			<div className={'flex justify-between gap-12'}>
				<Input type={'month'} defaultValue={viewInvoiceMonth} {...register('month')}/>
				<MainButton text={'検索'} color={'default'} type={'button'} onClick={handleChangeViewMonth}/>
			</div>
		</div>
	);
};

export default InvoiceSearch;
