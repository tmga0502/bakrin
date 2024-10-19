import React from 'react';
import {RadioBox} from './UserData.styles';
import {UserType} from "@adminFeatures/setting/types/type";
import {useForm} from "react-hook-form";
import { useAdminUserUpdate} from "@/react/api/query/AdminUserQuery";
import {FormGroup, FormLabel} from "@adminLayouts/form";
import {Input, Radio} from "@adminElements/form";
import {ErrorMessage} from "@mainLayouts/form";
import MainButton from "@adminElements/button/MainButton/MainButton";

const UserData: React.FC<UserType> = ({userData}) => {
	const {register, handleSubmit, formState:{errors}} = useForm({
		defaultValues:{
			id: userData.id,
			name: userData.name,
			authority: userData.authority
		}
	})
	const update = useAdminUserUpdate()

	const onSubmit = (data: any) => {
		update.mutate(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup>
				<FormLabel text={'名前'} htmlFor={'name'}/>
				<Input id={'name'} defaultValue={userData.name} {...register('name', {required: '入力してください'})}/>
				{errors.name && (
					<ErrorMessage msg={errors.name.message as string}/>
				)}
			</FormGroup>

			<FormGroup>
				<FormLabel text={'ログインID'} htmlFor={'loginId'}/>
				<Input id={'loginId'} defaultValue={userData.loginId} readOnly={true}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'閲覧権限'} htmlFor={'authority'}/>
				<div css={RadioBox}>
					<Radio text={'マスター権限'} value={0} defaultChecked={userData.authority === 0} {...register('authority')}/>
				</div>
				<div css={RadioBox}>
					<Radio text={'一般権限'} value={1} defaultChecked={userData.authority === 1} {...register('authority')}/>
				</div>
			</FormGroup>

			<MainButton text={'更新'} color={'info'} type={'submit'} width={'half'} align={'center'}/>
		</form>
	)
};

export default UserData;
