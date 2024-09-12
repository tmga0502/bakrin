import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {PageTitle} from "@/react/app/mainApp/components/title";
import TradeImageBox from "@/react/app/mainApp/features/item/TradeImageBox/TradeImageBox";
import Chat from "@/react/app/mainApp/features/item/Trade/Chat";
import {useParams} from "react-router-dom";
import {useGetTrade} from "@/react/api/query/TradeQuery";
import Loader from "@/react/app/mainApp/features/loader/Loader";

const TradeShowPage = () => {
	const params = useParams()
	const {data: tradeData, isLoading, error} = useGetTrade(params.tradeUuid as string)

	if(isLoading) return <Loader/>
	if (error) return <div>データの取得に失敗しました</div>;
	if (!tradeData) return <div>データがありません</div>;

	return (
	  <MainAppLayout>
		  <PageTitle en={'Trade'} jp={'取引詳細'}/>

		  <div className="grid xl:grid-cols-2">
			  <div className="grid-item">
				  <TradeImageBox data={tradeData}/>
			  </div>
			  <div className="grid-item">
				  <Chat/>
			  </div>
		  </div>
	  </MainAppLayout>
	);
};

export default TradeShowPage;
