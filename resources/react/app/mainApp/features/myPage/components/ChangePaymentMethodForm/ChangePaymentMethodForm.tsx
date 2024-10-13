import React from 'react';
import {RadioWrapper} from './ChangePaymentMethodForm.styles'
import MainButton from "@mainElements/button/MainButton/MainButton";
import Radio from "@mainElements/form/Radio/Radio";
import {TitleStyle, WrapperStyle} from "@mainFeatures/myPage/styles";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";
import {useForm} from "react-hook-form";
import {useProducerUpdate} from "@/react/api/query/ProducerQuery";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";

const ChangePaymentMethodForm: React.FC = () => {
	const producerData = useRecoilValue(IsAuthProducerDataStates)
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const {handleSubmit, register} = useForm()
	const update = useProducerUpdate()

	const onSubmit = (data: any) => {
		setIsLoading(true)
		update.mutate(data)
	}

	return (
		<div css={WrapperStyle}>
			<p css={TitleStyle}>支払い方法変更</p>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div css={RadioWrapper}>
					<Radio text={'銀行振込'} value={0} defaultChecked={producerData.paymentMethod === 0} {...register('paymentMethod')}/>
					<Radio text={'クレジットカード'} value={1} defaultChecked={producerData.paymentMethod === 1} {...register('paymentMethod')}/>
				</div>

				<MainButton text={'変更'} color={'mainGreen'} width={'half'} type={'submit'}/>
			</form>
		</div>
	);
};

export default ChangePaymentMethodForm;
