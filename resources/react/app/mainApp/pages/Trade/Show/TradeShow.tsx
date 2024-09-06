import {MainAppLayout} from "@/react/app/mainApp/components/layout";
import {PageTitle} from "@/react/app/mainApp/components/title";
import TradeImageBox from "@/react/app/mainApp/features/item/TradeImageBox/TradeImageBox";
import Chat from "@/react/app/mainApp/features/item/Trade/Chat";

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
