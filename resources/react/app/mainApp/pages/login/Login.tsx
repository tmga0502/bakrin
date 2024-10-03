import React from 'react';
import {useLogin} from "@/react/api/query/AuthQuery";
import {useForm} from "react-hook-form";
import loginImage from "@/images/loginImage.jpg";
import logo from "@/images/logo.png";
import {BackGround, BackGroundImage, ButtonWrapper, Container, FormSectionBox, ImageBox, ImageSectionBox, Logo, Title} from "@/react/app/mainApp/pages/login/Login.css";
import FormGroup from "@/react/components/layouts/form/formGroup/FormGroup";
import {FormLabel} from "@/react/components/layouts/form";
import Input from "@/react/components/elements/form/Input/Input";
import MainButton from "@/react/components/elements/button/MainButton/MainButton";

const Login = () => {
	const login = useLogin()
	const { register, handleSubmit} = useForm();

	const onSubmit = (data:any) => {
		login.mutate(data)
	}

    return (
		<div className={BackGround}>
			<div className={Container}>
				<div className={ImageSectionBox}>
					<div className={ImageBox}>
						<img src={loginImage} className={BackGroundImage} alt={'login image'}/>
						<img src={logo} className={Logo} alt={'logo'}/>
					</div>
				</div>
				<div className={FormSectionBox}>
					<h1 className={Title}>ログイン</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormGroup>
							<FormLabel text={'メールアドレス'} htmlFor={'email'}/>
							<Input type={'email'} id={'email'} {...register('email', {required: '入力してください'})}/>
						</FormGroup>

						<FormGroup>
							<FormLabel text={'パスワード'} htmlFor={'password'}/>
							<Input type={'password'} id={'password'} {...register('password', {required: '入力してください'})}/>
						</FormGroup>
						<div className={ButtonWrapper}>
							<MainButton text={'ログイン'} color={'mainGreen'} type={'submit'} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
