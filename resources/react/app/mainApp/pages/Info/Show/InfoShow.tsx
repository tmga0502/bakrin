import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/title";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import ShowBox from "@/react/app/mainApp/features/infoShow/components/ShowBox/ShowBox";

const InfoShow = () => {
	return (
		<MainLayout>
			<PageTitle en={'TOPICS'} jp={'〇〇についてのおしらせ'}/>

			<ShowBox/>
		</MainLayout>
	);
};

export default InfoShow;
