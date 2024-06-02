import React, {useEffect, useState} from 'react';
import {FormGroup, FormLabel} from "@/ts/appMain/components/_ui/form/Form";
import {MainButton} from "@/ts/appMain/components/_ui/button/Button";
import {useForm} from "react-hook-form";
import {useChangePassword} from "@/ts/_api/query/UserQuery";

const Password = () => {

    const {register, watch, handleSubmit, formState:{errors,}, reset} = useForm()
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

    const onSubmit = handleSubmit((data) => {
        changePassword.mutate(data, {
            onSuccess: () => {
                reset();
            }
        })
    })


    return (
        <div className="w-full bg-white p-4 mt-6">
            <p className="border-b-2 pb-2 mb-4">パスワード変更</p>

            <form onSubmit={onSubmit}>
                <FormGroup>
                    <FormLabel label={'現在のパスワード'} for={'nowPassword'}/>
                    <input id="nowPassword" type="password" className="inputStyle" {...register('nowPassword', {required:'入力必須です'})}/>
                    {errors.nowPassword?.message && typeof errors.nowPassword.message === 'string' && (
                        <p className="text-red-500 text-xs mt-2">{errors.nowPassword.message}</p>
                    )}
                </FormGroup>
                <FormGroup>
                    <FormLabel label={'新しいパスワード'} for={'newPassword'}/>
                    <input id="newPassword" type="password" className="inputStyle" {...register('newPassword', {required:'入力必須です', minLength: { value: 8, message: "8文字以上入力してください"}})}/>
                    {errors.newPassword?.message && typeof errors.newPassword.message === 'string' && (
                        <p className="text-red-500 text-xs mt-2">{errors.newPassword.message}</p>
                    )}
                </FormGroup>
                <FormGroup>
                    <FormLabel label={'新しいパスワード(確認用)'} for={'newPasswordConfirm'}/>
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
        </div>
    );
};

export default Password;
