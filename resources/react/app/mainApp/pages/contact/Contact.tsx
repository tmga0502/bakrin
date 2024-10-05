import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import ContainerMd from "@/react/app/mainApp/components/layout/container/ContainerMd/ContainerMd";
import Form from "@/react/app/mainApp/features/contact/components/Form/Form";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";

const Contact = () => {

	return (
		<MainLayout>
			<PageTitle en={'CONTACT'} jp={'お問い合わせ'}/>
			<ContainerMd>
				<Form/>
			</ContainerMd>
		</MainLayout>
	);
};

export default Contact;
