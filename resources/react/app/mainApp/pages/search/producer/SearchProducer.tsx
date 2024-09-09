import React from 'react';
import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {FormProvider, useForm} from "react-hook-form";
import {InputField, SelectField} from "@/react/app/mainApp/components/form";
import {MainButton} from "@/react/app/mainApp/components/button";
import {Prefectures} from "@/react/_constants/Prefectures";
import axios from "axios";
import {ProducerType} from "@/react/types/ProducerType";
import {ProducerPanel} from "@/react/app/mainApp/features/panel/index";
import {GridBox} from "@/react/app/mainApp/features/layout/index";
import {useRecoilState} from "recoil";
import {SearchProducerNameStates, SearchProducerPrefectureStates, SearchProducerResultStates} from "@/react/app/mainApp/states/SearchProducerStates";

const SearchProducer = () => {
	const methods = useForm();
	const {handleSubmit, reset} = methods
	const [searchProducerName, setSearchProducerName] = useRecoilState(SearchProducerNameStates)
	const [searchProducerPrefecture, setSearchProducerPrefecture] = useRecoilState(SearchProducerPrefectureStates)
	const [searchProducerResult, setSearchProducerResult] = useRecoilState(SearchProducerResultStates)

	const onSubmit = async (data: any) => {
		setSearchProducerName(data.producer)
		setSearchProducerPrefecture(data.address)
		const response = await axios.post<ProducerType[]>(`/api/producers/searchProducer`, data);
		setSearchProducerResult(response.data)
	}

	const handleReset = () => {
		reset()
		setSearchProducerName('')
		setSearchProducerPrefecture('')
		setSearchProducerResult([])
	}

	return (
		<MainAppLayout>
			<div className={'w-full bg-white py-2 px-4 mb-8'}>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={'flex gap-4'}>
							<InputField label={'生産者名'} id={'producer'} type={'text'} defaultValue={searchProducerName}/>
							<SelectField label={'都道府県'} id={'address'} optionObj={Prefectures} defaultValue={searchProducerPrefecture}/>
						</div>
						<div className={'mt-1 text-center flex gap-4 justify-end'}>
							<MainButton value={'検索'} color={'mainGreen'} type={'submit'} size={'sm'}/>
							<MainButton value={'リセット'} color={'default'} type={'button'} size={'sm'} onClick={handleReset}/>
						</div>
					</form>
				</FormProvider>
			</div>

			<GridBox>
				{searchProducerResult.map((item:ProducerType) =>(
					<ProducerPanel data={item} key={item.id}/>
				))}
			</GridBox>
		</MainAppLayout>
	);
};

export default SearchProducer;
