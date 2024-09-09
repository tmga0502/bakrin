import {MainAppLayout} from "@/react/app/mainApp/features/layout";
import {PageTitle} from "@/react/app/mainApp/components/title";
import TradeImageBox from "@/react/app/mainApp/features/item/TradeImageBox/TradeImageBox";
import {MainButton} from "@/react/app/mainApp/components/button";

const ReceiveApplicationShowPage = () => {
	const handleConfirm =() => {
		console.log('確認')
	}

	return (
	  <MainAppLayout>
		  <PageTitle en={'RECEIVE APPLICATION'} jp={'申請確認'}/>

		  <p className="text-center mb-6">以下の交換申請が届いています</p>
		  <TradeImageBox/>

		  {/* TODO:以下のボタン押下時は両方ともmodalで最終確認を表示する */}
		  <div className="flex items-center gap-12 justify-center max-w-80 mx-auto">
			  <MainButton type={'button'} value={'承認する'} color={'success'} onClick={handleConfirm}/>
			  <MainButton type={'button'} value={'拒否する'} color={'danger'} onClick={handleConfirm}/>
		  </div>
	  </MainAppLayout>
	);
};

export default ReceiveApplicationShowPage;
