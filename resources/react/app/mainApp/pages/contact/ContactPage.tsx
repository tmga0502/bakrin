import React from 'react';
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import ContainerMd from "@mainLayouts/container/ContainerMd/ContainerMd";
import {PageTitle} from "@mainElements/title";
import {ContactForm} from "@mainFeatures/contact/components";

const ContactPage = () => {

	return (
		<MainLayout>
			<PageTitle en={'CONTACT'} jp={'お問い合わせ'}/>
			<ContainerMd>
				<ContactForm/>
			</ContainerMd>
		</MainLayout>
	);
};

export default ContactPage;
