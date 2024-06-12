import {MainAppLayout} from "@/ts/components/ui/layout";
import {PageTitle} from "@/ts/components/ui/title/Title";
import TradeImageBox from "@/ts/components/model/item/TradeImageBox/TradeImageBox";
import Chat from "@/ts/components/model/item/Trade/Chat";

const TradeShowPage = () => {
	return (
	  <MainAppLayout>
		  <PageTitle en={'Trade'} jp={'取引詳細'}/>

		  <div className="grid lg:grid-cols-2">
			  <div className="grid-item">
				  <TradeImageBox/>
			  </div>
			  <div className="grid-item">
				  <Chat/>
			  </div>
		  </div>
	  </MainAppLayout>
	);
};

export default TradeShowPage;
