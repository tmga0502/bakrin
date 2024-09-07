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
import {useSearchProducerContext} from "@/react/app/mainApp/hooks/SearchProducerContext/SearchProducerContext";
import {useIsLoading} from "@/react/app/mainApp/hooks/IsLoadingContext";
import Loader from "@/react/app/mainApp/features/loader/Loader";

const SearchProducer = () => {
	const {isLoading, setIsLoading} = useIsLoading();
	const methods = useForm();
	const {handleSubmit, reset} = methods
	const {searchProducerName, setSearchProducerName, searchPrefectureName, setSearchPrefectureName, searchProducerResults, setSearchProducerResults} = useSearchProducerContext()

	const onSubmit = async (data: any) => {
		setIsLoading(true)
		setSearchProducerName(data.producer)
		setSearchPrefectureName(data.address)
		const response = await axios.post<ProducerType[]>(`/api/producers/searchProducer`, data);
		setSearchProducerResults(response.data)
		setIsLoading(false)
	}

	const handleReset = () => {
		reset()
		setSearchProducerName('')
		setSearchPrefectureName('')
		setSearchProducerResults([])
	}

	return (
		<MainAppLayout>
			<div className={'w-full bg-white py-2 px-4 mb-8'}>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={'flex gap-4'}>
							<InputField label={'生産者名'} id={'producer'} type={'text'} defaultValue={searchProducerName}/>
							<SelectField label={'都道府県'} id={'address'} optionObj={Prefectures} defaultValue={searchPrefectureName}/>
						</div>
						<div className={'mt-1 text-center flex gap-4 justify-end'}>
							<MainButton value={'検索'} color={'mainGreen'} type={'submit'} size={'sm'}/>
							<MainButton value={'リセット'} color={'default'} type={'button'} size={'sm'} onClick={handleReset}/>
						</div>
					</form>
				</FormProvider>
			</div>

			{isLoading ? <Loader/> : (
				<GridBox>
					{searchProducerResults.map((item:any) =>(
						<ProducerPanel data={item} key={item.id}/>
					))}
				</GridBox>
			)}
		</MainAppLayout>
	);
};

export default SearchProducer;
