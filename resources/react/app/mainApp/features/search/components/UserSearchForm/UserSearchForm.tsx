import React from 'react';
import {Prefectures} from "@/react/_constants/Prefectures";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {useForm} from "react-hook-form";
import {useRecoilState, useSetRecoilState} from "recoil";
import {SearchUserNameStates, SearchUserPrefectureStates, SearchUserResultStates} from "@/react/app/mainApp/states/SearchUserStates";
import axios from "axios";
import {UserType} from "@/react/types/UserType";
import {FormGroup, FormLabel} from "@mainLayouts/form";
import Input from "@mainElements/form/InputField/Input";
import SelectBox from "@mainElements/form/SelectBox/SelectBox";

const UserSearchForm: React.FC = () => {
	const {register, handleSubmit, reset} = useForm()
	const [searchUserName, setSearchUserName] = useRecoilState(SearchUserNameStates)
	const [searchUserPrefecture, setSearchUserPrefecture] = useRecoilState(SearchUserPrefectureStates)
	const setSearchUserResult = useSetRecoilState(SearchUserResultStates)

	const onSubmit = async (data: any) => {
		setSearchUserName(data.producer)
		setSearchUserPrefecture(data.address)
		const response = await axios.post<UserType[]>(`/api/producers/searchUser`, data);
		setSearchUserResult(response.data)
	}

	const handleReset = () => {
		reset()
		setSearchUserName('')
		setSearchUserPrefecture('')
		setSearchUserResult([])
	}

	return (
		<div className={'w-full bg-white px-4 py-2 mb-8'}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={'flex gap-4'}>
					<FormGroup>
						<FormLabel text={'生産者名'} htmlFor={'producerName'}/>
						<Input id={'producerName'} defaultValue={searchUserName} {...register('producer')}/>
					</FormGroup>
					<FormGroup>
						<FormLabel text={'都道府県'} htmlFor={'address'}/>
						<SelectBox optionObj={Prefectures} id={'address'} defaultValue={searchUserPrefecture} {...register('address')}/>
					</FormGroup>
				</div>
				<div className={'w-[70%] flex gap-4 justify-end mt-1 ml-auto text-center sm:w-1/2 md:w-[30%]'}>
					<MainButton text={'検索'} color={'mainGreen'} type={'submit'} size={'sm'} width={'full'}/>
					<MainButton text={'リセット'} color={'default'} type={'button'} size={'sm'} width={'full'} onClick={handleReset}/>
				</div>
			</form>
		</div>
	);
};

export default UserSearchForm;
