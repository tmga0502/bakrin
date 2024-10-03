import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {PageTitle} from "@/react/app/mainApp/components/title";
import TradeItemPanel from "@/react/app/mainApp/features/itemList/TradeItemePanel/TradeItemPanel";
import {useGetTradeRequests} from "@/react/api/query/TradeQuery";
import React from "react";
import Loader from "@/react/app/mainApp/features/loader/Loader";
import {TradeType} from "@/react/types/TradeType";
import {formatDate} from "@/react/app/mainApp/functions/formatter";

const ReceiveApplicationListPage = () => {
	const {data: tradeRequestsData, isLoading} = useGetTradeRequests();

	if(isLoading) return <Loader/>

	return (
	  <MainAppLayout>
		  <PageTitle en={'RECEIVE APPLICATION'} jp={'申請依頼'}/>
		  {tradeRequestsData?.map((list:TradeType)=>{
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

export default ReceiveApplicationListPage;
