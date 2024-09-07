import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {PageTitle} from "@/react/app/mainApp/components/title";
import { MainButton } from '@/react/app/mainApp/components/button';
import {TextAreaField} from "@/react/app/mainApp/components/form";
import {MainAppLayout} from "@/react/app/mainApp/features/layout";

const Contact = () => {
	const methods = useForm()
	const {handleSubmit} = methods

	const onSubmit = (data: any) => {
		console.log(data)
	}

	return (
		<MainAppLayout>
			<PageTitle en={'CONTACT'} jp={'お問い合わせ'}/>
			<div className="max-w-2xl mx-auto mt-10">
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextAreaField id={"body"} label={"お問い合わせ内容"} rows={12} />

						<p>※お問い合わせに対する回答は、ご登録いただいていますメールアドレスへ返信させていただきます。</p>
						<div className="text-center mt-8">
							<MainButton value={'送信'} color={'mainGreen'} type={'submit'} width={'half'}/>
						</div>
					</form>
				</FormProvider>
			</div>
		</MainAppLayout>
	);
};

export default Contact;
