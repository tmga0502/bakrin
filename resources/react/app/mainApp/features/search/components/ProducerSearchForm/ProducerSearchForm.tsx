import React from 'react';
import {ButtonBox, FlexFormStyle, Wrapper} from './ProducerSearchForm.styles';
import {Prefectures} from "@/react/_constants/Prefectures";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {useForm} from "react-hook-form";
import {useRecoilState, useSetRecoilState} from "recoil";
import {SearchProducerNameStates, SearchProducerPrefectureStates, SearchProducerResultStates} from "@/react/app/mainApp/states/SearchProducerStates";
import axios from "axios";
import {UserType} from "@/react/types/UserType";
import {FormGroup, FormLabel} from "@mainLayouts/form";
import Input from "@mainElements/form/InputField/Input";
import SelectBox from "@mainElements/form/SelectBox/SelectBox";

const ProducerSearchForm: React.FC = () => {
	const {register, handleSubmit, reset} = useForm()
	const [searchProducerName, setSearchProducerName] = useRecoilState(SearchProducerNameStates)
	const [searchProducerPrefecture, setSearchProducerPrefecture] = useRecoilState(SearchProducerPrefectureStates)
	const setSearchProducerResult = useSetRecoilState(SearchProducerResultStates)

	const onSubmit = async (data: any) => {
		setSearchProducerName(data.producer)
		setSearchProducerPrefecture(data.address)
		const response = await axios.post<UserType[]>(`/api/producers/searchProducer`, data);
		setSearchProducerResult(response.data)
	}

	const handleReset = () => {
		reset()
		setSearchProducerName('')
		setSearchProducerPrefecture('')
		setSearchProducerResult([])
	}

	return (
		<div css={Wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div css={FlexFormStyle}>
					<FormGroup>
						<FormLabel text={'生産者名'} htmlFor={'producerName'}/>
						<Input id={'producerName'} defaultValue={searchProducerName} {...register('producer')}/>
					</FormGroup>
					<FormGroup>
						<FormLabel text={'都道府県'} htmlFor={'address'}/>
						<SelectBox optionObj={Prefectures} id={'address'} defaultValue={searchProducerPrefecture} {...register('address')}/>
					</FormGroup>
				</div>
				<div css={ButtonBox}>
					<MainButton text={'検索'} color={'mainGreen'} type={'submit'} size={'sm'} width={'full'}/>
					<MainButton text={'リセット'} color={'default'} type={'button'} size={'sm'} width={'full'} onClick={handleReset}/>
				</div>
			</form>
		</div>
	);
};

export default ProducerSearchForm;
