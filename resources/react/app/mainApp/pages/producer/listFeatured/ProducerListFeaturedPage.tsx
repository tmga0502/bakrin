import React from 'react';
import {useGetPopularProducers} from "@/react/api/query/ProducerQuery";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import ProducerListFeatured from "@/react/app/mainApp/features/producer/producer-list-featured";

const ProducerListFeaturedPage = () => {
	const { data: producersData } = useGetPopularProducers();
	return (
		<MainLayout>
			{producersData !== undefined ? (
				<ProducerListFeatured data={producersData}/>
			):(
				<CanNotGetData/>
			)}
		</MainLayout>
	);
};

export default ProducerListFeaturedPage;
