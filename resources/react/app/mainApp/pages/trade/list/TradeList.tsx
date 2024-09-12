import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {PageTitle} from "@/react/app/mainApp/components/title";
import React from "react";
import TradeItemPanel from "@/react/app/mainApp/features/item/TradeItemePanel/TradeItemPanel";
import {useGetTrades} from "@/react/api/query/TradeQuery";
import Loader from "@/react/app/mainApp/features/loader/Loader";
import {TradeType} from "@/react/types/TradeType";
import {formatDate} from "@/react/app/mainApp/functions/formatter";

const TradeListPage = () => {
	const {data: tradeData, isLoading} = useGetTrades()

	if (isLoading) return <Loader/>

	return (
	  <MainAppLayout>
		  <PageTitle en={'TRADE'} jp={'取引一覧'}/>
		  {tradeData?.map((list:TradeType)=>{
			  const partnerProducer = list.trade_producers.filter(producer=>producer.type === 'sender')[0]
			  return(
				  <TradeItemPanel
					  link={list.uuid}
					  itemName={partnerProducer.item.name}
					  producerName={partnerProducer.producer.organizationName}
					  thumbnail={partnerProducer.item.thumbnail}
					  date={formatDate(list.created_at)}
					  key={list.id}
				  />
			  )
		  })}
	  </MainAppLayout>
	);
};

export default TradeListPage;
