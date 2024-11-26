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
			  console.log(tradeRequestsData)
			  const partnerProducer = list.trade_members.filter(user=>user.applicant_flag)[0]
			  return(
				  <ListPanel
					  link={list.uuid}
					  itemName={partnerProducer.item.name}
					  userName={partnerProducer.user.organization_name}
					  thumbnail={partnerProducer.item.thumbnail_path}
					  date={formatDate(list.created_at)}
					  key={list.id}
				  />
			  )
		  })}
	  </MainLayout>
	);
};

export default ReceiveRequestListPage;
