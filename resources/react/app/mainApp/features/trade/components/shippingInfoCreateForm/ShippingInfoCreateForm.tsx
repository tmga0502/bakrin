import React from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import {ErrorMessage, FormGroup, FormLabel} from "@mainLayouts/form";
import {Budge} from "@mainElements/budge";
import Input from "../../../../components/elements/form/InputField/Input";
import MainButton from "@mainElements/button/MainButton/MainButton";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import {useCreate} from "@/react/api/query/ShippingInfoQuery";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";

const ShippingInfoCreateForm: React.FC<{setMode: any}> = ({setMode}) => {
	const authUser = useRecoilValue(IsAuthUserDataStates)
	const { register, handleSubmit, setValue, getValues, formState:{errors}, reset} = useForm();
	const create = useCreate(reset, setMode)
	setValue('user_id', authUser.id)

	const handleSearchAddress = async (zipcode: string) => {
		const res = await axios.get("https://api.zipaddress.net/?zipcode=" + zipcode);
		if (res.data.code === 200) {
			setValue('address1', `${res.data.data.pref}`);
			setValue('address2', `${res.data.data.city}${res.data.data.town}`);
		} else {
			toast.error("郵便番号を取得できませんでした。\n入力をお確かめの上、再度検索してください。");
		}
	};

	const onSubmit = (data:any) => {
		create.mutate(data)
	}

	return (
		<ContainerSm>

			<form onSubmit={handleSubmit(onSubmit)}>

				<FormGroup>
					<div className={'mb-1'}>
						<Budge color={'danger'} value={'必須'} size={'sm'}/>
						<FormLabel text={'郵便番号'} htmlFor={'postal_code'}/>
					</div>
					<div className={'flex items-center gap-2'}>
						<div className={'w-4/5'}>
							<Input type={'text'} id={'postal_code'} {...register('postal_code', {required: '入力してください'})}/>
						</div>
						<MainButton text={'検索'} color={'default'} type={'button'} size={'sm'} onClick={() => {
							handleSearchAddress(getValues("postal_code"))
						}}/>
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
						<FormLabel text={'宛名'} htmlFor={'name'}/>
					</div>
					<Input type={'text'} id={'name'} {...register('name', {required: '入力してください'})}/>
					<ErrorMessage msg={errors.name?.message as string}/>
				</FormGroup>

				<FormGroup>
					<div className={'mb-1'}>
						<Budge color={'danger'} value={'必須'} size={'sm'}/>
						<FormLabel text={'電話番号'} htmlFor={'phone_number'}/>
					</div>
					<Input type={'text'} id={'phone_number'} {...register('phone_number', {required: '入力してください'})}/>
					<ErrorMessage msg={errors.phone_number?.message as string}/>
				</FormGroup>

				<div className={'text-center'}>
					<MainButton text={'登録'} color={'mainGreen'} type={'submit'}/>
				</div>

			</form>
		</ContainerSm>
	);
};

export default ShippingInfoCreateForm;
