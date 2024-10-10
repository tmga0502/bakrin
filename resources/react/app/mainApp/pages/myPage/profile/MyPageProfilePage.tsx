import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import {ChangePasswordForm, ChangePaymentMethodForm, ProfileData} from "@mainFeatures/myPage/components";

const MyPageProfilePage = () => {
	return (
		<MainLayout>
			<PageTitle en={'profile'} jp={'プロフィール'}/>
			<ContainerSm>
				<ProfileData/>
				<ChangePasswordForm/>
				<ChangePaymentMethodForm/>
			</ContainerSm>
		</MainLayout>
	);
};

export default MyPageProfilePage;
