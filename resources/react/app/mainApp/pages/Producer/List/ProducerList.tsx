import {MainAppLayout} from "@/react/app/mainApp/components/layout";
import {PageTitle} from "@/react/app/mainApp/components/title";
import {useGetPopularProducers} from "@/react/api/query/ProducerQuery";
import Loader from "@/react/app/mainApp/components/loader/Loader";
import React from "react";
import {ProducerPanel} from "@/react/app/mainApp/features/producer/ProducerPanel/ProducerPanel";

const ProducerListPage = () => {
	const { data: producersData } = useGetPopularProducers()
	if(producersData === undefined) return <Loader/>

	return (
		<MainAppLayout>
			<PageTitle en={'producers'} jp={'生産者一覧'}/>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
				{producersData.map((producer) => (
					<ProducerPanel data={producer} key={producer.id}/>
				))}
			</div>
		</MainAppLayout>
	);
};

export default ProducerListPage;
