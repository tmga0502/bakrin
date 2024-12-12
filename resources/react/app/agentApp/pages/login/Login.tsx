import React from 'react';
import {useLogin} from "@/react/api/query/AuthUserQuery";
import {useForm} from "react-hook-form";
import loginImage from "@/images/loginImage.jpg";
import logo from "@/images/logo.png";
import {FormGroup, FormLabel} from "@mainLayouts/form";
import Input from "../../../mainApp/components/elements/form/InputField/Input";
import MainButton from "@mainElements/button/MainButton/MainButton";

const Login = () => {
	const login = useLogin()
	const { register, handleSubmit} = useForm();

	const onSubmit = (data:any) => {
		login.mutate(data)
	}

	return (
		<div className={'relative h-screen bg-mainGreen'}>
			<div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-3/4 max-w-[800px] max-h-3/4 sm:flex sm:justify-between sm:items-center sm:h-1/2'}>
				<div className={'w-full h-[150px] max-h-1/2 sm:w-1/2 sm:order-2 sm:h-full sm:max-h-full'}>
					<div className={'w-full h-full relative'}>
						<img src={loginImage} className={'w-full h-full object-cover blur-[2px]'} alt={'login image'}/>
						<img src={logo} className={'absolute w-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} alt={'logo'}/>
					</div>
				</div>
				<div className={'w-full px-12 py-6 sm:w-1/2 sm:order-1'}>
					<h1 className={'text-xl font-bold text-center mb-8 sm:text-2xl'}>代理店様 | ログイン</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormGroup>
							<FormLabel text={'メールアドレス'} htmlFor={'email'}/>
							<Input type={'email'} id={'email'} {...register('email', {required: '入力してください'})}/>
						</FormGroup>

						<FormGroup>
							<FormLabel text={'パスワード'} htmlFor={'password'}/>
							<Input type={'password'} id={'password'} {...register('password', {required: '入力してください'})}/>
						</FormGroup>
						<div className={'text-center'}>
							<MainButton text={'ログイン'} color={'mainGreen'} type={'submit'} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
