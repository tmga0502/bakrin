import React from 'react';
import {useLogin} from "@/react/api/query/AuthProducerQuery";
import {useForm} from "react-hook-form";
import loginImage from "@/images/loginImage.jpg";
import logo from "@/images/logo.png";
import {BackGround, BackGroundImage, ButtonWrapper, Container, FormSectionBox, ImageBox, ImageSectionBox, Logo, Title} from "@/react/app/mainApp/pages/login/Login.styles";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";
import {FormGroup, FormLabel} from "@/react/app/mainApp/components/layout/form";
import Input from "@/react/app/mainApp/components/elements/form/InputField/Input";

const Login = () => {
	const login = useLogin()
	const { register, handleSubmit} = useForm();

	const onSubmit = (data:any) => {
		login.mutate(data)
	}

    return (
		<div css={BackGround}>
			<div css={Container}>
				<div css={ImageSectionBox}>
					<div css={ImageBox}>
						<img src={loginImage} css={BackGroundImage} alt={'login image'}/>
						<img src={logo} css={Logo} alt={'logo'}/>
					</div>
				</div>
				<div css={FormSectionBox}>
					<h1 css={Title}>ログイン</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormGroup>
							<FormLabel text={'メールアドレス'} htmlFor={'email'}/>
							<Input type={'email'} id={'email'} {...register('email', {required: '入力してください'})}/>
						</FormGroup>

						<FormGroup>
							<FormLabel text={'パスワード'} htmlFor={'password'}/>
							<Input type={'password'} id={'password'} {...register('password', {required: '入力してください'})}/>
						</FormGroup>
						<div css={ButtonWrapper}>
							<MainButton text={'ログイン'} color={'mainGreen'} type={'submit'} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
