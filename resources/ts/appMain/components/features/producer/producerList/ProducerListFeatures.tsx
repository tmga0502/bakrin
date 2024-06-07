import React from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import ProducerList from "@/ts/appMain/components/features/producer/producerList/container/producerList/ProducerList";
import {useGetPopularProducers} from "@/ts/_api/query/ProducerQuery";
import Loader from "@/ts/appMain/components/_common/loader/Loader";

const ProducerListFeatures = () => {
	const { data: producersData, status } = useGetPopularProducers()

	if (status === 'success'){
		return (
			<MainLayout>
				<PageTitle en={'PRODUCERS'} jp={'生産者一覧'}/>
				<Breadcrumb/>
				<ProducerList data={producersData}/>
			</MainLayout>
		);
	}else{
		return <Loader/>
	}
};

export default ProducerListFeatures;
