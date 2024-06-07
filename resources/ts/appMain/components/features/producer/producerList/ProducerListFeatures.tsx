import React from 'react';
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import {useGetPopularProducers} from "@/ts/_api/query/ProducerQuery";
import Loader from "@/ts/appMain/components/_common/loader/Loader";
import {ProducerPanel} from "@/ts/appMain/components/_common/imageListItem/ImageListItem";

const ProducerListFeatures = () => {
	const { data: producersData, status } = useGetPopularProducers()

	if (status === 'success'){
		return (
			<MainLayout>
				<PageTitle en={'PRODUCERS'} jp={'生産者一覧'}/>
				<Breadcrumb/>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
					{producersData.map((producer) => (
						<ProducerPanel data={producer} key={producer.id}/>
					))}
				</div>
			</MainLayout>
		);
	} else {
		return <Loader/>
	}
};

export default ProducerListFeatures;
