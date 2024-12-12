import React from 'react';
import {TradeMemberType} from "@/react/types/TradeMemberType";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import {Radio} from "@mainElements/form";
import {useForm} from "react-hook-form";
import MainButton from "@mainElements/button/MainButton/MainButton";
import {ErrorMessage} from "@mainLayouts/form";
import { useUpdateShippingId } from '@/react/api/query/TradeQuery';

const ShippingInfoList: React.FC<{myData: TradeMemberType}> = ({myData}) => {
	const authUser = useRecoilValue(IsAuthUserDataStates)
	const {setValue, register, handleSubmit, formState:{errors}} = useForm()
	const update = useUpdateShippingId();
	setValue('tradeMemberId', myData.id)

	const onSubmit = (data:any) => {
		update.mutate(data)
	}

	if (authUser.shipping_info.length === 0){
		return (
			<p>登録済みの住所がありません</p>
		)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{authUser.shipping_info.map((list) => (
				<div className={'mb-3'} key={list.id}>
					<Radio text={
						<div>
							<p>〒{list.postal_code}</p>
							<p>{list.address1}{list.address2}{list.address3}{list.address4}</p>
							<p>{list.name}</p>
						</div>
					} value={list.id} {...register('shipping_info_id', {required: '選択してください'})}/>
				</div>
			))}
			{errors.shipping_info_id && (
				<ErrorMessage msg={errors.shipping_info_id.message as string}/>
			)}
			<div className={'text-center'}>
				<MainButton text={'登録'} color={'mainGreen'} type={'submit'}/>
			</div>
		</form>
	)
}

export default ShippingInfoList;
