import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {PageTitle} from "@/react/app/mainApp/components/title";
import React from "react";
import {applicationList} from "@/react/app/mainApp/_dummyData/ApplicationList";
import TradeItemPanel from "@/react/app/mainApp/features/item/TradeItemePanel/TradeItemPanel";

const TradeListPage = () => {
	return (
	  <MainAppLayout>
		  <PageTitle en={'TRADE'} jp={'取引一覧'}/>
		  {applicationList.map((list:any, index:number)=>(
			  <TradeItemPanel  link={''+list.id} itemName={list.itemName} producerName={list.producerName} thumbnail={list.thumbnail} date={list.date} status={1} key={index}/>
		  ))}
	  </MainAppLayout>
	);
};

export default TradeListPage;
