import React from 'react';
import loginImage from "@/images/loginImage.jpg";
import logo from "@/images/logo.png";
import {FormGroup, FormLabel} from "@/ts/appMain/components/_ui/form/Form";
import {MainButton} from "@/ts/appMain/components/_ui/button/Button";
import {useForm} from "react-hook-form";
import {useLogin} from "@/ts/_api/query/AuthQuery";

const LoginFeatures = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const login = useLogin()
    const onSubmit = handleSubmit((data) => {
        console.log(data)
        // setIsLoading(true)
        login.mutate(data)
    })

    return (
        <div className="flex justify-center items-center h-screen bg-darkGreen">
            <div className="bg-white sm:flex justify-between items-center w-3/4 max-w-4xl max-h-3/4 sm:h-1/2">
                <div className="w-full flex flex-col items-center order-1 sm:w-1/2 sm:order-2 sm:h-full">
                    <div className="w-full h-full relative">
                        <img src={loginImage} className="w-full h-full object-cover blur-[1px]" alt={'login image'}/>
                        <img src={logo} className="absolute w-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt={'logo'}/>
                    </div>
                </div>
                <div className="w-full p-8 order-2 sm:w-1/2 sm:order-1">
                    <h1 className="text-xl  sm:text-2xl font-bold mb-8 text-center">ログイン</h1>
                    <form onSubmit={onSubmit}>
                        <FormGroup>
                            <FormLabel label={'メールアドレス'} for={'email'}/>
                            <input className={'inputStyle'} id={'email'} {...register('email', {required:true})}/>
                            {errors.name && (<p className="text-danger text-sm">入力必須です</p>)}
                        </FormGroup>
                        <FormGroup>
                            <FormLabel label={'パスワード'} for={'password'}/>
                            <input type={'password'} className={'inputStyle'} id={'password'} {...register('password',{required:true})}/>
                            {errors.password && (<p className="text-danger text-sm">入力必須です</p>)}
                        </FormGroup>
                        <div className="mt-8">
                            <MainButton value={'ログイン'} color={'success'} type={'submit'} width={'full'}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginFeatures;
