import React from 'react';
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import ShowBox from "@/react/app/mainApp/features/infoShow/components/ShowBox/ShowBox";
import {PageTitle} from "@/react/app/mainApp/components/elements/title";

const InfoShow = () => {
	return (
		<MainLayout>
			<PageTitle en={'TOPICS'} jp={'〇〇についてのおしらせ'}/>

			<ShowBox/>
		</MainLayout>
	);
};

export default InfoShow;
