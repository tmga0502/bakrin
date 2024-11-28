import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import ContainerSm from "@mainLayouts/container/ContainerSm/ContainerSm";
import MyPageTopContext from "@mainFeatures/myPage/context/MyPageTopContext";

const MyPageTopPage = () => {
	return (
		<MainLayout>
			<PageTitle en={'MY PAGE'} jp={'マイページ'}/>
			<ContainerSm>
				<MyPageTopContext/>
			</ContainerSm>
		</MainLayout>
	);
};

export default MyPageTopPage;
