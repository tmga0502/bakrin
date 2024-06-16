import React from 'react';
import {MainAppLayout} from "@/ts/components/ui/layout";
import {FormProvider, useForm} from "react-hook-form";
import {InputField, SelectField} from "@/ts/components/ui/form";
import {MainButton} from "@/ts/components/ui/button";
import {Prefectures} from "@/ts/_constants/Prefectures";
import axios from "axios";
import {ProducerType} from "@/ts/types/ProducerType";
import {ProducerPanel} from "@/ts/components/model/producer/ProducerPanel/ProducerPanel";
import {GridBox} from "@/ts/components/ui/box";
import {useSearchProducerContext} from "@/ts/hooks/SearchProducerContext/SearchProducerContext";
import {useIsLoading} from "@/ts/hooks/IsLoadingContext";
import Loader from "@/ts/components/ui/loader/Loader";

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
					{searchProducerResults.map((item) =>(
						<ProducerPanel data={item} key={item.id}/>
					))}
				</GridBox>
			)}
		</MainAppLayout>
	);
};

export default SearchProducer;
