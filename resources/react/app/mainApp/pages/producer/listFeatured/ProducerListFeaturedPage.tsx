import React from 'react';
import {useGetPopularProducers} from "@/react/api/query/ProducerQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import {ProducerList} from "@mainFeatures/producer/components";

const ProducerListFeaturedPage = () => {
	const { data: producersData = [] } = useGetPopularProducers();
	return (
		<MainLayout>
			<PageTitle en={'producers'} jp={'注目の生産者一覧'}/>
			<ProducerList producerList={producersData}/>
		</MainLayout>
	);
};

export default ProducerListFeaturedPage;
