import {useGetPopularProducers} from "@/react/api/query/ProducerQuery";
import React from "react";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import {ProducerList} from "@mainFeatures/producer/components";

const ProducerListPage = () => {
	const { data: producersData = [] } = useGetPopularProducers()
	return (
		<MainLayout>
			<PageTitle en={'producers'} jp={'生産者一覧'}/>
			<ProducerList producerList={producersData}/>
		</MainLayout>
	);
};

export default ProducerListPage;
