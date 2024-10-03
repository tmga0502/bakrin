import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/title";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import ContainerMd from "@/react/app/mainApp/components/layout/container/ContainerMd/ContainerMd";
import Form from "@/react/app/mainApp/features/contact/components/Form/Form";

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
