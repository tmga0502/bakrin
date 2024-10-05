import React from 'react';
import {PaymentMethodType} from "./PaymentMethod.type";
import {WrapperStyle, TitleStyle} from "../../styles/common.css";
import {RadioWrapper} from './PaymentMethod.css'
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";
import Radio from "@/react/app/mainApp/components/elements/form/Radio/Radio";

const PaymentMethod: React.FC<PaymentMethodType> = () => {
	return (
		<div className={WrapperStyle}>
			<p className={TitleStyle}>支払い方法変更</p>
			<div className={RadioWrapper}>
				<Radio text={'銀行振込'} name={'paymentMethod'}/>
				<Radio text={'クレジットカード'} name={'paymentMethod'}/>
			</div>

			<MainButton text={'変更'} color={'mainGreen'} width={'half'} type={'submit'}/>
		</div>
	);
};

export default PaymentMethod;
