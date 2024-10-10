import React from "react";
import {useGetTradeRequests} from "@/react/api/query/TradeQuery";
import MainLayout from "@mainLayouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import {TradeType} from "@/react/types/TradeType";
import {ListPanel} from "@mainFeatures/trade/components";
import {formatDate} from "@/react/app/mainApp/functions/formatter";

const ReceiveRequestListPage = () => {
	const {data: tradeRequestsData = []} = useGetTradeRequests();

	return (
	  <MainLayout>
		  <PageTitle en={'RECEIVE REQUEST'} jp={'申請依頼'}/>
		  {tradeRequestsData.map((list:TradeType)=>{
			  const partnerProducer = list.trade_producers.filter(producer=>producer.type === 'sender')[0]
			  return(
				  <ListPanel
					  link={list.uuid}
					  itemName={partnerProducer.item.name}
					  producerName={partnerProducer.producer.organizationName}
					  thumbnail={partnerProducer.item.thumbnail}
					  date={formatDate(list.created_at)}
					  key={list.id}
				  />
			  )
		  })}
	  </MainLayout>
	);
};

export default ReceiveRequestListPage;
