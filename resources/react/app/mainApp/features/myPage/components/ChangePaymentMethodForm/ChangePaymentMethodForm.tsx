import React from 'react';
import {RadioWrapper} from './ChangePaymentMethodForm.styles'
import MainButton from "@mainElements/button/MainButton/MainButton";
import Radio from "@mainElements/form/Radio/Radio";
import {TitleStyle, WrapperStyle} from "@mainFeatures/myPage/styles";

const ChangePaymentMethodForm: React.FC = () => {
	return (
		<div css={WrapperStyle}>
			<p css={TitleStyle}>支払い方法変更</p>
			<div css={RadioWrapper}>
				<Radio text={'銀行振込'} name={'paymentMethod'}/>
				<Radio text={'クレジットカード'} name={'paymentMethod'}/>
			</div>

			<MainButton text={'変更'} color={'mainGreen'} width={'half'} type={'submit'}/>
		</div>
	);
};

export default ChangePaymentMethodForm;
