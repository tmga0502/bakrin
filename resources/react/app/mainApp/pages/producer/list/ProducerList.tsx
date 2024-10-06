import {useGetPopularProducers} from "@/react/api/query/ProducerQuery";
import React from "react";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import ProducerList from "@/react/app/mainApp/features/producerList";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";

const ProducerListPage = () => {
	const { data: producersData } = useGetPopularProducers()
	return (
		<MainLayout>
			{producersData !== undefined ? (
				<ProducerList data={producersData}/>
			):(
				<CanNotGetData/>
			)}
		</MainLayout>
	);
};

export default ProducerListPage;
