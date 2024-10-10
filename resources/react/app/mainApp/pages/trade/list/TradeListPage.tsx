import React from "react";
import {useGetTrades} from "@/react/api/query/TradeQuery";
import MainLayout from "@/react/app/mainApp/components/layouts/MainLayout/MainLayout";
import {PageTitle} from "@mainElements/title";
import {TradeType} from "@/react/types/TradeType";
import {ListPanel} from "@mainFeatures/trade/components";
import {formatDate} from "@/react/app/mainApp/functions/formatter";

const TradeListPage = () => {
	const {data: tradeData = []} = useGetTrades()

	return (
	  <MainLayout>
		  <PageTitle en={'TRADE'} jp={'取引一覧'}/>
		  {tradeData.map((list:TradeType)=>{
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

export default TradeListPage;
