import {MainAppLayout} from "@/ts/components/ui/layout";
import {PageTitle} from "@/ts/components/ui/title";
import {useParams} from "react-router-dom";
import {useGetProducer} from "@/ts/_api/query/ProducerQuery";
import Loader from "@/ts/components/ui/loader/Loader";
import React from "react";
import ProducerShowPanel from "@/ts/components/model/producer/ProducerShowPanel/ProducerShowPanel";
import {ItemPanel} from "@/ts/components/model/item/ItemPanel/ItemPanel";

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
			  {producerData.items.map(item => (
				  <ItemPanel data={item} key={item.id}/>
			  ))}
		  </div>
	  </MainAppLayout>
	);
};

export default ProducerShowPage;
