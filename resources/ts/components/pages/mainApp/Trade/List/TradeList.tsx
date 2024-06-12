import {MainAppLayout} from "@/ts/components/ui/layout";
import {PageTitle} from "@/ts/components/ui/title/Title";
import React from "react";
import {applicationList} from "@/ts/_dummyData/ApplicationList";
import TradeItemPanel from "@/ts/components/model/item/TradeItemePanel/TradeItemPanel";

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
