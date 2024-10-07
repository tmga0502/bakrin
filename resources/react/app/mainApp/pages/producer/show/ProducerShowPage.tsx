import {useParams} from "react-router-dom";
import {useGetProducer} from "@/react/api/query/ProducerQuery";
import React from "react";
import MainLayout from "@/react/app/mainApp/components/layout/MainLayout/MainLayout";
import CanNotGetData from "@/react/app/mainApp/components/layout/error/CanNotGetData/CanNotGetData";
import ProducerShow from "@/react/app/mainApp/features/producer/producer-show";

const ProducerShowPage = () => {
	const params = useParams()
	const { data: producerData } = useGetProducer(params.producerId)

	return (
	  <MainLayout>
		  {producerData !== undefined ? (
			  <ProducerShow data={producerData}/>
		  ):(
			  <CanNotGetData/>
		  )}
	  </MainLayout>
	);
};

export default ProducerShowPage;
