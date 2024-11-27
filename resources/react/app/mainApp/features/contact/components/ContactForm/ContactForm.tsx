import React from 'react';
import {useForm} from "react-hook-form";
import {FormGroup} from "@mainLayouts/form";
import {TextArea} from "@mainElements/form";
import MainButton from "@mainElements/button/MainButton/MainButton";

const ContactForm: React.FC = () => {
	const {register, handleSubmit} = useForm()

	const onSubmit = (data: any) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup>
				<TextArea rows={15} {...register('body')}/>
			</FormGroup>

			<p className={'text-xs mb-6'}>※お問い合わせに対する回答は、ご登録いただいていますメールアドレスへ返信させていただきます。</p>
			<MainButton text={'送信'} color={'mainGreen'} type={'submit'} width={'half'}/>
		</form>
	);
};

export default ContactForm;
