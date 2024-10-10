import {useParams} from "react-router-dom";
import {useGetProducer} from "@/react/api/query/ProducerQuery";
import React from "react";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {ProducerType} from "@/react/types/ProducerType";
import {Pr, ShowPanel, ItemList} from "@mainFeatures/producer/components";

const ProducerShowPage = () => {
	const params = useParams()
	const { data: producerData = {} as ProducerType } = useGetProducer(params.producerId)

	return (
	  <MainLayout>
		  <ShowPanel data={producerData}/>
		  <Pr data={producerData}/>
		  <ItemList itemData={producerData.items}/>
	  </MainLayout>
	);
};

export default ProducerShowPage;
