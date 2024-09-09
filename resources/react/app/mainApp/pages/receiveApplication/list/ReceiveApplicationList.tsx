import { applicationList } from "@/react/app/mainApp/_dummyData/ApplicationList";
import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {PageTitle} from "@/react/app/mainApp/components/title";
import TradeItemPanel from "@/react/app/mainApp/features/item/TradeItemePanel/TradeItemPanel";

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
