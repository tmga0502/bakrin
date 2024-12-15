import React, {useState} from 'react';
import {useAgentRegister} from "@/react/api/query/AuthAgentQuery";
import {useForm} from "react-hook-form";
import loginImage from "@/images/loginImage.jpg";
import logo from "@/images/logo.png";
import {ErrorMessage, FormGroup, FormLabel} from "@mainLayouts/form";
import Input from "../../../mainApp/components/elements/form/InputField/Input";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {Link} from "react-router-dom";

const RegisterPage = () => {
	const { register, handleSubmit, formState:{errors}, reset} = useForm();
	const agentRegister = useAgentRegister(reset);

	const [passwordButtonText, setPasswordButtonText] = useState('表示')
	const [passwordInputType, setPasswordInputType] = useState('password')

	const handleDisplayPassword = () => {
		if(passwordButtonText === '表示'){
			setPasswordButtonText('非表示')
			setPasswordInputType('text')
		}else{
			setPasswordButtonText('表示')
			setPasswordInputType('password')
		}
	}

	const onSubmit = (data:any) => {
		agentRegister.mutate(data)
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
					<h1 className={'text-xl font-bold text-center mb-8 sm:text-2xl'}>代理店様 | 新規登録</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormGroup>
							<FormLabel text={'お名前'} htmlFor={'name'}/>
							<Input type={'text'} id={'name'} {...register('name', {required: '入力してください'})}/>
							<ErrorMessage msg={errors.name?.message as string}/>
						</FormGroup>


						<FormGroup>
							<FormLabel text={'メールアドレス'} htmlFor={'email'}/>
							<Input type={'email'} id={'email'} {...register('email', {required: '入力してください'})}/>
							<ErrorMessage msg={errors.email?.message as string}/>
						</FormGroup>

						<FormGroup>
							<FormLabel text={'パスワード'} htmlFor={'password'}/>

							<div className={'flex items-center gap-2'}>
								<div className={'w-4/5'}>
									<Input type={passwordInputType} id={'password'} {...register('password', {required: '入力してください', minLength: {value: 6, message: 'パスワードは6文字以上で入力してください'}})}/>
								</div>
								<MainButton text={passwordButtonText} color={'default'} type={'button'} size={'sm'} onClick={handleDisplayPassword}/>
							</div>
							<ErrorMessage msg={errors.password?.message as string}/>
						</FormGroup>

						<div className={'text-center'}>
							<MainButton text={'新規登録'} color={'mainGreen'} type={'submit'}/>
						</div>
					</form>

					<Link to={'/agent/login'}>
						<p className={'text-right mt-12 text-xs underline hover:text-bakGray'}>ログインはこちら</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
