import {MainAppLayout} from "@/ts/components/ui/layout";
import {PageTitle} from "@/ts/components/ui/title/Title";
import {useGetPopularProducers} from "@/ts/_api/query/ProducerQuery";
import Loader from "@/ts/components/ui/loader/Loader";
import React from "react";
import {ProducerPanel} from "@/ts/components/model/producer/ProducerPanel/ProducerPanel";

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
