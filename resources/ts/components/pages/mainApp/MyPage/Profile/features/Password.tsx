import React, {useEffect, useState} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {useChangePassword} from "@/ts/_api/query/UserQuery";
import FormGroup from "@/ts/components/ui/form/FormGroup";
import FormLabel from "@/ts/components/ui/form/FormLabel";
import {MainButton} from "@/ts/components/ui/button";

const MyPageProfileData = () => {
	const methods = useForm()
	const {register, watch, handleSubmit, reset, formState:{errors}} = methods
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
		<div className="w-full bg-white p-4 mt-6">
			<p className="border-b-2 pb-2 mb-4">パスワード変更</p>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormGroup>
						<FormLabel label={'現在のパスワード'} htmlFor={'nowPassword'}/>
						<input id="nowPassword" type="password" className="inputStyle" {...register('nowPassword', {required:'入力必須です'})}/>
						{errors.nowPassword?.message && typeof errors.nowPassword.message === 'string' && (
							<p className="text-red-500 text-xs mt-2">{errors.nowPassword.message}</p>
						)}
					</FormGroup>
					<FormGroup>
						<FormLabel label={'新しいパスワード'} htmlFor={'newPassword'}/>
						<input id="newPassword" type="password" className="inputStyle" {...register('newPassword', {required:'入力必須です', minLength: { value: 8, message: "8文字以上入力してください"}})}/>
						{errors.newPassword?.message && typeof errors.newPassword.message === 'string' && (
							<p className="text-red-500 text-xs mt-2">{errors.newPassword.message}</p>
						)}
					</FormGroup>
					<FormGroup>
						<FormLabel label={'新しいパスワード(確認用)'} htmlFor={'newPasswordConfirm'}/>
						<input id="newPasswordConfirm" type="password" className="inputStyle" {...register('newPasswordConfirm', {required:'入力必須です', minLength: { value: 8, message: "8文字以上入力してください"}})}/>
						{errors.newPasswordConfirm?.message && typeof errors.newPasswordConfirm.message === 'string' && (
							<p className="text-red-500 text-xs mt-2">{errors.newPasswordConfirm.message}</p>
						)}
						{watch('newPassword') !== watch('newPasswordConfirm') && (
							<p className="text-red-500 text-xs mt-2">パスワードが一致しません</p>
						)}
					</FormGroup>

					<div className="text-center">
						<MainButton value={'変更'} color={'success'} width={'half'} type={'submit'} disabled={btnState}/>
					</div>
				</form>
			</FormProvider>
		</div>
	);
};

export default MyPageProfileData;
