import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import {ErrorMessage, FormGroup, FormLabel} from "@mainLayouts/form";
import Input from "../../../components/elements/form/InputField/Input";
import MainButton from "@mainElements/button/MainButton/MainButton";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import {Budge} from "@mainElements/budge";
import Logo from "@/images/logo.png"
import { useRegister } from '@/react/api/query/AuthUserQuery';

const RegisterContext:React.FC<{referralCode: string}> = ({referralCode}) => {
	const userRegister = useRegister()
	const { register, handleSubmit, setValue, getValues, formState:{errors}} = useForm();
	const [passwordButtonText, setPasswordButtonText] = useState('表示')
	const [passwordInputType, setPasswordInputType] = useState('password')
	setValue('referral_code', referralCode)

	const handleSearchAddress = async (zipcode: string) => {
		const res = await axios.get("https://api.zipaddress.net/?zipcode=" + zipcode);
		if (res.data.code === 200) {
			setValue('address1', `${res.data.data.pref}`);
			setValue('address2', `${res.data.data.city}${res.data.data.town}`);
		} else {
			toast.error("郵便番号を取得できませんでした。\n入力をお確かめの上、再度検索してください。");
		}
	};

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
		userRegister.mutate(data)
	}

	return (
		<ContainerSm>
			<div className={'w-[150px] mx-auto mt-12 mb-3'}>
				<img src={Logo} alt="logo" className={'w-full'} />
			</div>
			<h1 className={'text-center text-2xl mb-12'}>
				新規登録
			</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<FormGroup>
					<div className={'mb-1'}>
						<Budge color={'danger'} value={'必須'} size={'sm'}/>
						<FormLabel text={'法人・団体名'} htmlFor={'organization_name'}/>
					</div>
					<Input type={'text'} id={'organization_name'} {...register('organization_name', {required: '入力してください'})}/>
					<ErrorMessage msg={errors.organization_name?.message as string}/>
				</FormGroup>

				<FormGroup>
					<div className={'mb-1'}>
						<Budge color={'danger'} value={'必須'} size={'sm'}/>
						<FormLabel text={'代表者名'} htmlFor={'president_name'}/>
					</div>
					<Input type={'text'} id={'president_name'} {...register('president_name', {required: '入力してください'})}/>
					<ErrorMessage msg={errors.president_name?.message as string}/>
				</FormGroup>

				<FormGroup>
					<div className={'mb-1'}>
						<Budge color={'danger'} value={'必須'} size={'sm'}/>
						<FormLabel text={'郵便番号'} htmlFor={'postal_code'}/>
					</div>
					<div className={'flex items-center gap-2'}>
						<div className={'w-4/5'}>
							<Input type={'text'} id={'postal_code'} {...register('postal_code', {required: '入力してください'})}/>
						</div>
						<MainButton text={'検索'} color={'default'} type={'button'} size={'sm'} onClick={()=>{handleSearchAddress(getValues("postal_code"))}}/>
					</div>
					<ErrorMessage msg={errors.postal_code?.message as string}/>
				</FormGroup>

				<FormGroup>
					<div className={'mb-1'}>
						<Budge color={'danger'} value={'必須'} size={'sm'}/>
						<FormLabel text={'都道府県'} htmlFor={'address1'}/>
					</div>
					<Input type={'text'} id={'address1'} {...register('address1', {required: '入力してください'})}/>
					<ErrorMessage msg={errors.address1?.message as string}/>
				</FormGroup>

				<FormGroup>
					<div className={'mb-1'}>
						<Budge color={'danger'} value={'必須'} size={'sm'}/>
						<FormLabel text={'市区町村'} htmlFor={'address2'}/>
					</div>
					<Input type={'text'} id={'address2'} {...register('address2', {required: '入力してください'})}/>
					<ErrorMessage msg={errors.address2?.message as string}/>
				</FormGroup>

				<FormGroup>
					<div className={'mb-1'}>
						<Budge color={'danger'} value={'必須'} size={'sm'}/>
						<FormLabel text={'番地以下'} htmlFor={'address3'}/>
					</div>
					<Input type={'text'} id={'address3'} {...register('address3', {required: '入力してください'})}/>
					<ErrorMessage msg={errors.address3?.message as string}/>
				</FormGroup>

				<FormGroup>
					<FormLabel text={'建物名等'} htmlFor={'address4'}/>
					<Input type={'text'} id={'address4'} {...register('address4')}/>
				</FormGroup>

				<FormGroup>
					<div className={'mb-1'}>
						<Budge color={'danger'} value={'必須'} size={'sm'}/>
						<FormLabel text={'電話番号'} htmlFor={'phone_number'}/>
					</div>
					<Input type={'text'} id={'phone_number'} {...register('phone_number', {required: '入力してください'})}/>
					<ErrorMessage msg={errors.phone_number?.message as string}/>
				</FormGroup>

				<FormGroup>
					<div className={'mb-1'}>
						<Budge color={'danger'} value={'必須'} size={'sm'}/>
						<FormLabel text={'メールアドレス'} htmlFor={'email'}/>
					</div>
					<Input type={'email'} id={'email'} {...register('email', {required: '入力してください'})}/>
					<ErrorMessage msg={errors.email?.message as string}/>
				</FormGroup>

				<FormGroup>
					<div className={'mb-1'}>
						<Budge color={'danger'} value={'必須'} size={'sm'}/>
						<FormLabel text={'パスワード'} htmlFor={'password'}/>
					</div>
					<div className={'flex items-center gap-2'}>
						<div className={'w-4/5'}>
							<Input type={passwordInputType} id={'password'} {...register('password', {required: '入力してください'})}/>
						</div>
						<MainButton text={passwordButtonText} color={'default'} type={'button'} size={'sm'} onClick={handleDisplayPassword}/>
					</div>
					<ErrorMessage msg={errors.password?.message as string}/>
				</FormGroup>


				<div className={'text-center'}>
					<MainButton text={'登録'} color={'mainGreen'} type={'submit'}/>
				</div>
			</form>
		</ContainerSm>
	);
};

export default RegisterContext;
