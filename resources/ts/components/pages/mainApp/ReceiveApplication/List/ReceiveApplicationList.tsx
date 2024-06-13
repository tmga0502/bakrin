import { applicationList } from "@/ts/_dummyData/ApplicationList";
import {MainAppLayout} from "@/ts/components/ui/layout";
import {PageTitle} from "@/ts/components/ui/title";
import TradeItemPanel from "@/ts/components/model/item/TradeItemePanel/TradeItemPanel";

const ReceiveApplicationListPage = () => {
	return (
	  <MainAppLayout>
		  <PageTitle en={'RECEIVE APPLICATION'} jp={'申請依頼'}/>
		  {applicationList.map((list:any, index:number)=>(
			  <TradeItemPanel  link={''+list.id} itemName={list.itemName} producerName={list.producerName} thumbnail={list.thumbnail} date={list.date} key={index}/>
		  ))}
	  </MainAppLayout>
	);
};

export default ReceiveApplicationListPage;
