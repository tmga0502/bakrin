import React from 'react';
import MainTitle from "@adminLayouts/title/MainTitle/MainTitle";
import ContainerSm from "@adminLayouts/container/ContainerSm/ContainerSm";
import {ErrorMessage, FormGroup, FormLabel} from "@adminLayouts/form";
import {Input, TextArea} from "@adminElements/form";
import {useForm} from "react-hook-form";
import MainButton from "@adminElements/button/MainButton/MainButton";
import {useCreateData} from "@/react/api/query/NoticeQuery";
import {useSetRecoilState} from "recoil";
import {AdminIsLoadingStates} from "@/react/app/adminApp/states/IsLoadingStates";

const NoticeCreateContents = () => {
	const {register, handleSubmit, formState:{errors}} = useForm()
	const setIsLoading = useSetRecoilState(AdminIsLoadingStates)
	const create = useCreateData()

	const onSubmit = (data: any) => {
		setIsLoading(true)
		create.mutate(data)
	}

	return (
		<div>
			<MainTitle title={'お知らせ 【新規作成】'}/>
			<ContainerSm>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormGroup>
						<FormLabel text={'タイトル'} htmlFor={'title'}/>
						<Input id={'title'} {...register('title', {required: '入力してください'})}/>
						{errors.title && (
							<ErrorMessage msg={errors.title.message as string}/>
						)}
					</FormGroup>

					<FormGroup>
						<FormLabel text={'本文'} htmlFor={'body'}/>
						<TextArea id={'body'} rows={20} {...register('body', {required: '入力してください'})}/>
						{errors.body && (
							<ErrorMessage msg={errors.body.message as string}/>
						)}
					</FormGroup>

					<MainButton type={'submit'} text={'登録'} color={'info'} align={'center'} width={'half'}/>
				</form>
			</ContainerSm>
		</div>
	);
};

export default NoticeCreateContents;
