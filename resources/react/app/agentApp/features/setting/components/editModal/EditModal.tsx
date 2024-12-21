import React from 'react';
import {FormGroup, FormLabel} from "@/react/app/agentApp/components/layouts/form";
import {Input, SelectBox} from "@/react/app/agentApp/components/elements/form";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {ErrorMessage} from "@mainLayouts/form";
import {useRecoilValue} from "recoil";
import {IsAgentAuthDataStates} from "@/react/app/agentApp/states/AuthStates";
import {useForm} from "react-hook-form";
import axios from "axios";
import {toast} from "react-toastify";
import {useAgentUserUpdate} from "@/react/api/query/AgentUserQuery";

const EditModal: React.FC<{setIsModalOpen: any}> = ({setIsModalOpen}) => {
	const authData = useRecoilValue(IsAgentAuthDataStates)
	const {handleSubmit, register, getValues, setValue, formState:{errors}} = useForm()
	const update = useAgentUserUpdate(setIsModalOpen)

	const handleSearchAddress = async (zipcode: string) => {
		const res = await axios.get("https://api.zipaddress.net/?zipcode=" + zipcode);
		if (res.data.code === 200) {
			setValue('address1', `${res.data.data.pref}`);
			setValue('address2', `${res.data.data.city}${res.data.data.town}`);
		} else {
			toast.error("郵便番号を取得できませんでした。\n入力をお確かめの上、再度検索してください。");
		}
	};

	const onsubmit = (data:any) => {
		update.mutate(data)
	}

	return (
		<form onSubmit={handleSubmit(onsubmit)}>
			<FormGroup>
				<FormLabel text={'パスワード'} htmlFor={'password'}/>
				<Input id={'password'} {...register('password')}/>
				<p className={'text-right text-danger text-xs'}>変更する場合は新しいパスワードを入力してください</p>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'電話番号'} htmlFor={'phone_number'}/>
				<Input id={'phone_number'} defaultValue={authData.phone_number} {...register('phone_number')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'郵便番号'} htmlFor={'postal_code'}/>
				<div className={'flex items-center gap-2'}>
					<div className={'w-4/5'}>
						<Input type={'text'} id={'postal_code'} defaultValue={authData.postal_code} {...register('postal_code')}/>
					</div>
					<MainButton text={'検索'} color={'default'} type={'button'} size={'sm'} onClick={() => {
						handleSearchAddress(getValues("postal_code"))
					}}/>
				</div>
				<ErrorMessage msg={errors.postal_code?.message as string}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'都道府県'} htmlFor={'address1'}/>
				<Input type={'text'} id={'address1'} defaultValue={authData.address1} {...register('address1')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'市区町村'} htmlFor={'address2'}/>
				<Input type={'text'} id={'address2'} defaultValue={authData.address2} {...register('address2')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'番地以下'} htmlFor={'address3'}/>
				<Input type={'text'} id={'address3'} defaultValue={authData.address3} {...register('address3')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'建物名等'} htmlFor={'address4'}/>
				<Input type={'text'} id={'address4'} defaultValue={authData.address4} {...register('address4')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'銀行'} htmlFor={'bank_name'}/>
				<Input type={'text'} id={'bank_name'} defaultValue={authData.bank_name} {...register('bank_name')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'支店'} htmlFor={'branch_name'}/>
				<Input type={'text'} id={'branch_name'} defaultValue={authData.branch_name} {...register('branch_name')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'種別'} htmlFor={'bank_type'}/>
				<SelectBox optionObj={[{id: '普通', name: '普通'}, {id: '当座', name: '当座'}]} id={'bank_type'} defaultValue={authData.bank_type} {...register('bank_type')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'口座番号'} htmlFor={'bank_number'}/>
				<Input type={'text'} id={'bank_number'} defaultValue={authData.bank_number} {...register('bank_number')}/>
			</FormGroup>

			<FormGroup>
				<FormLabel text={'口座名義'} htmlFor={'bank_account'}/>
				<Input type={'text'} id={'bank_account'} defaultValue={authData.bank_account} {...register('bank_account')}/>
			</FormGroup>

			<div className={'text-center mt-12'}>
				<MainButton text={'更新'} color={'mainGreen'} type={'submit'}/>
			</div>
		</form>
	);
};

export default EditModal;
