import React from 'react';
import Breadcrumb from "@/ts/appMain/components/_common/breadcrumb/Breadcrumb";
import {MainLayout} from "@/ts/appMain/components/_common/layout/Layout";
import {ItemListPanel, ProducerShowPanel} from "@/ts/appMain/components/_common/imageListItem/ImageListItem";
import {PageTitle} from "@/ts/appMain/components/_ui/title/Title";
import {useParams} from "react-router-dom";
import {useGetProducer} from "@/ts/_api/query/ProducerQuery";
import Loader from "@/ts/appMain/components/_common/loader/Loader";


const ProducerShowFeatures = () => {
	const params = useParams()
	const { data: producerData, status } = useGetProducer(params.producerId)

	if(status === 'success') {
		console.log(producerData)
		return (
			<MainLayout>
				<Breadcrumb/>
				<ProducerShowPanel img={producerData.imgPath} name={producerData.organizationName} address={`${producerData.address1}${producerData.address2}`}/>
				<div className="my-8 p-4 border-t-2 border-b-2">
					{producerData.pr}
				</div>

				<PageTitle en={'ITEMS'} jp={'出品中の商品'}/>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
					{producerData.items.map(item => (
						<ItemListPanel data={item} key={item.id}/>
					))}
				</div>
			</MainLayout>
		);
	}else{
		return <Loader/>
	}
};

export default ProducerShowFeatures;
