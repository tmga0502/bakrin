import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import {MyPageProfileContext} from "@mainFeatures/myPage/components";

const MyPageProfilePage = () => {
	return (
		<MainLayout>
			<PageTitle en={'profile'} jp={'プロフィール'}/>
			<ContainerSm>
				<MyPageProfileContext/>
			</ContainerSm>
		</MainLayout>
	);
};

export default MyPageProfilePage;
