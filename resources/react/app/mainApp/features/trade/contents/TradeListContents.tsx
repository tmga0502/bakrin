import React, {useState} from 'react';
import {PageTitle} from "@mainElements/title";
import {ListPanel} from "@mainFeatures/trade/components";
import {createImageUrl, formatDate} from "@/react/app/mainApp/functions/formatter";
import {TradeListPageType} from "@mainFeatures/trade/types";
import Tab from "@mainLayouts/tab/Tab/Tab";
import {useRecoilValue} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";

const TradeListContents:React.FC<TradeListPageType> = ({ongoingTradesData, pendingTradesData}) => {
	const authUserData = useRecoilValue(IsAuthUserDataStates)
	const [viewMode, setViewMode] = useState('進行中')
	const tabMenu = ['進行中', '申請中']

	const  data = viewMode === '進行中' ? ongoingTradesData : pendingTradesData

	return (
		<>
			<PageTitle en={'TRADE'} jp={'取引一覧'}/>
			<Tab mode={viewMode} setMode={setViewMode} tabMenu={tabMenu}/>
			{data.map((list)=>{
				const partnerUser = list.trade_users.filter(tradeUser=>tradeUser.user.uuid !== authUserData.uuid)[0]
				return(
					<ListPanel
						link={list.uuid}
						itemName={partnerUser.item.name}
						userName={partnerUser.user.organizationName}
						thumbnail={createImageUrl(partnerUser.item.thumbnail)}
						date={formatDate(list.created_at)}
						key={list.id}
					/>
				)
			})}
		</>
	);
};

export default TradeListContents;
