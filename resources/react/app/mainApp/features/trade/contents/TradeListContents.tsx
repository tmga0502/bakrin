import React, {useState} from 'react';
import {PageTitle} from "@mainElements/title";
import {ListPanel} from "@mainFeatures/trade/components";
import {formatDate} from "@/react/app/mainApp/functions/formatter";
import {TradeListPageType} from "@mainFeatures/trade/types";
import Tab from "@mainLayouts/tab/Tab/Tab";
import {useRecoilValue} from "recoil";
import {IsAuthProducerDataStates} from "@/react/app/mainApp/states/AuthStates";

const TradeListContents:React.FC<TradeListPageType> = ({ongoingTradesData, pendingTradesData}) => {
	const authProducerData = useRecoilValue(IsAuthProducerDataStates)
	const [viewMode, setViewMode] = useState('進行中')
	const tabMenu = ['進行中', '申請中']

	console.log(ongoingTradesData)
	console.log(authProducerData)

	const  data = viewMode === '進行中' ? ongoingTradesData : pendingTradesData

	return (
		<>
			<PageTitle en={'TRADE'} jp={'取引一覧'}/>
			<Tab mode={viewMode} setMode={setViewMode} tabMenu={tabMenu}/>
			{data.map((list)=>{
				const partnerProducer = list.trade_producers.filter(tradeProducer=>tradeProducer.producer.uuid !== authProducerData.uuid)[0]
				return(
					<ListPanel
						link={list.uuid}
						itemName={partnerProducer.item.name}
						producerName={partnerProducer.producer.organizationName}
						thumbnail={partnerProducer.item.thumbnail}
						date={formatDate(list.created_at)}
						key={list.id}
					/>
				)
			})}
		</>
	);
};

export default TradeListContents;
