import React from 'react';
import {FormType} from "./Form.type";
import {Caution} from './Form.css';
import {FormGroup} from "@/react/components/layouts/form";
import MainButton from "@/react/components/elements/button/MainButton/MainButton";
import {useForm} from "react-hook-form";
import TextArea from "@/react/components/elements/form/TextArea/TextArea";

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

			<p className={Caution}>※お問い合わせに対する回答は、ご登録いただいていますメールアドレスへ返信させていただきます。</p>
			<MainButton text={'送信'} color={'mainGreen'} type={'submit'} width={'half'}/>
		</form>
	);
};

export default Form;
