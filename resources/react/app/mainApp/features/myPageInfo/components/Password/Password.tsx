import React, {useEffect, useState} from 'react';
import {PasswordType} from "./Password.type";
import { useForm} from "react-hook-form";
import {FormLabel, FormGroup, ErrorMessage} from "@/react/components/layouts/form/index";
import MainButton from "@/react/components/elements/button/MainButton/MainButton";
import {useChangePassword} from "@/react/api/query/UserQuery";
import Input from "@/react/components/elements/form/Input/Input";
import {WrapperStyle, TitleStyle, ButtonWrapper } from "../../styles/common.css";

const Password: React.FC<PasswordType> = ({}) => {
	const {register, watch, handleSubmit, reset, formState:{errors}} = useForm()
	const [btnState, setBtnState] = useState(true)
	const changePassword = useChangePassword()

	useEffect(() => {
		if (watch('newPassword') !== watch('newPasswordConfirm')) {
			setBtnState(true)
		}else if(watch('nowPassword') !== '' && watch('newPassword') !== '' && watch('newPasswordConfirm') !== '') {
			setBtnState(false)
		}else{
			setBtnState(true)
		}
	}, [watch('nowPassword'), watch('newPassword'), watch('newPasswordConfirm')]);


	const onSubmit = (data: any) => {
		changePassword.mutate(data, {
			onSuccess: () => {
				reset();
			}
		})
	}


	return (
		<div className={WrapperStyle}>
			<p className={TitleStyle}>パスワード変更</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormGroup>
					<FormLabel text={'現在のパスワード'} htmlFor={'nowPassword'}/>
					<Input type={'password'} id={'nowPassword'} {...register('nowPassword', {required: '入力してください'})}/>
					{errors.nowPassword?.message && typeof errors.nowPassword.message === 'string' && (
						<ErrorMessage msg={errors.nowPassword.message}/>
					)}
				</FormGroup>
				<FormGroup>
					<FormLabel text={'新しいパスワード'} htmlFor={'newPassword'}/>
					<Input type={'password'} id={'newPassword'} {...register('newPassword', {required: '入力してください'})}/>
					{errors.newPassword?.message && typeof errors.newPassword.message === 'string' && (
						<ErrorMessage msg={errors.newPassword.message}/>
					)}
				</FormGroup>
				<FormGroup>
					<FormLabel text={'新しいパスワード(確認用)'} htmlFor={'newPasswordConfirm'}/>
					<Input type={'password'} id={'newPasswordConfirm'} {...register('newPasswordConfirm', {required: '入力してください'})}/>
					{errors.newPasswordConfirm?.message && typeof errors.newPasswordConfirm.message === 'string' && (
						<ErrorMessage msg={errors.newPasswordConfirm.message}/>
					)}
					{watch('newPassword') !== watch('newPasswordConfirm') && (
						<ErrorMessage msg={'パスワードが一致しません'}/>
					)}
				</FormGroup>

				<MainButton text={'変更'} color={'mainGreen'} width={'half'} type={'submit'} disabled={btnState}/>
			</form>
		</div>
	);
};

export default Password;
