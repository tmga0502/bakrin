import {MainAppLayout} from "@/react/app/mainApp/components/layout";
import {PageTitle} from "@/react/app/mainApp/components/title";
import {useParams} from "react-router-dom";
import {useGetProducer} from "@/react/api/query/ProducerQuery";
import Loader from "@/react/app/mainApp/components/loader/Loader";
import React from "react";
import ProducerShowPanel from "@/react/app/mainApp/features/producer/ProducerShowPanel/ProducerShowPanel";
import {ItemPanel} from "@/react/app/mainApp/features/item/ItemPanel/ItemPanel";

const ProducerShowPage = () => {
	const params = useParams()
	const { data: producerData } = useGetProducer(params.producerId)
	if(producerData === undefined) return <Loader/>

	return (
	  <MainAppLayout>
		  <ProducerShowPanel data={producerData}/>
		  <div className="my-8 p-4 border-t-2 border-b-2">
			  {producerData.pr}
		  </div>

		  <PageTitle en={'ITEMS'} jp={'出品中の商品'}/>
		  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
			  {producerData.items.map((item: any) => (
				  <ItemPanel data={item} key={item.id}/>
			  ))}
		  </div>
	  </MainAppLayout>
	);
};

export default ProducerShowPage;
