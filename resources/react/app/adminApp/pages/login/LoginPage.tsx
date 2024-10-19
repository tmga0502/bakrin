import React from 'react';
import {useForm} from "react-hook-form";
import loginImage from "@/images/loginImage.jpg";
import logo from "@/images/logo.png";
import {BackGround, BackGroundImage, ButtonWrapper, Container, FormSectionBox, ImageBox, ImageSectionBox, Logo, Title} from "@/react/app/adminApp/pages/login/LoginPage.styles";
import MainButton from "@adminElements/button/MainButton/MainButton";
import {FormGroup, FormLabel} from "@/react/app/mainApp/components/layouts/form";
import Input from "@adminElements/form/InputField/Input";
import {useAdminLogin} from "@/react/api/query/AuthAdminQuery";

const LoginPage = () => {
	const { register, handleSubmit} = useForm();
	const login = useAdminLogin()

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
					<h1 css={Title}>ログイン | 管理者用</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormGroup>
							<FormLabel text={'ログインID'} htmlFor={'loginId'}/>
							<Input type={'text'} id={'loginId'} {...register('loginId', {required: '入力してください'})}/>
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

export default LoginPage;
