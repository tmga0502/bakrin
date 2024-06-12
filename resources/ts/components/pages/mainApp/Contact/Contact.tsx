import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {PageTitle} from "@/ts/components/ui/title/Title";
import { MainButton } from '@/ts/components/ui/button';
import {TextAreaField} from "@/ts/components/ui/form";
import {MainAppLayout} from "@/ts/components/ui/layout";

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
