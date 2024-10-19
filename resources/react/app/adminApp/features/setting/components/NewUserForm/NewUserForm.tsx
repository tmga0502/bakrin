import React, {useState} from 'react';
import {PasswordWrapper, RadioBox} from './NewUserForm.styles';
import {useForm} from "react-hook-form";
import {FormGroup, FormLabel} from "@adminLayouts/form";
import {Input, Radio} from "@adminElements/form";
import {ErrorMessage} from "@mainLayouts/form";
import IconButton from "@adminElements/button/IconButton/IconButton";
import MainButton from "@adminElements/button/MainButton/MainButton";
import { useAdminUserCreate } from '@/react/api/query/AdminUserQuery';

const NewUserForm: React.FC = () => {
	const [passwordType, setPasswordType] = useState<'password' | 'text'>('password')
	const [passwordIconType, setPasswordIconType] = useState<'openEyes' | 'closedEyes'>('openEyes')
	const {register, handleSubmit, formState:{errors}} = useForm()
	const create = useAdminUserCreate()

	const handlePasswordType = () => {
		if(passwordType === 'password'){
			setPasswordType('text')
			setPasswordIconType('closedEyes')
		}else{
			setPasswordType('password')
			setPasswordIconType('openEyes')
		}
	}

	const onSubmit = (data: any) => {
		create.mutate(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup>
				<FormLabel text={'名前'} htmlFor={'name'}/>
				<Input id={'name'} {...register('name', {required: '入力してください'})}/>
				{errors.name && (
					<ErrorMessage msg={errors.name.message as string}/>
				)}
			</FormGroup>

			<FormGroup>
				<FormLabel text={'ログインID'} htmlFor={'loginId'}/>
				<Input id={'loginId'} {...register('loginId', {required: '入力してください'})}/>
				{errors.loginId && (
					<ErrorMessage msg={errors.loginId.message as string}/>
				)}
			</FormGroup>

			<FormGroup>
				<FormLabel text={'パスワード'} htmlFor={'password'}/>
				<div css={PasswordWrapper}>
					<Input id={'password'} type={passwordType} {...register('password', {required: '入力してください'})}/>
					<IconButton icon={passwordIconType} color={'dark'} size={'sm'} onClick={()=>{handlePasswordType()}}/>
				</div>
				{errors.password && (
					<ErrorMessage msg={errors.password.message as string}/>
				)}
			</FormGroup>

			<FormGroup>
				<FormLabel text={'閲覧権限'} htmlFor={'authority'}/>
				<div css={RadioBox}>
					<Radio text={'マスター権限'} value={0} {...register('authority')}/>
				</div>
				<div css={RadioBox}>
					<Radio text={'一般権限'} value={1} defaultChecked={true} {...register('authority')}/>
				</div>
			</FormGroup>

			<MainButton text={'登録'} color={'info'} type={'submit'} width={'half'} align={'center'}/>
		</form>
);
};

export default NewUserForm;
