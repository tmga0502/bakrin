import React from 'react';
import {FormType} from "./Form.type";
import {Caution} from './Form.styles';
import {useForm} from "react-hook-form";
import MainButton from "@/react/app/mainApp/components/elements/button/MainButton/MainButton";
import {FormGroup} from "@/react/app/mainApp/components/layout/form";
import TextArea from "@/react/app/mainApp/components/elements/form/TextArea/TextArea";

const Form: React.FC<FormType> = ({}) => {
	const {register, handleSubmit} = useForm()

	const onSubmit = (data: any) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup>
				<TextArea rows={15} {...register('body')}/>
			</FormGroup>

			<p css={Caution}>※お問い合わせに対する回答は、ご登録いただいていますメールアドレスへ返信させていただきます。</p>
			<MainButton text={'送信'} color={'mainGreen'} type={'submit'} width={'half'}/>
		</form>
	);
};

export default Form;
