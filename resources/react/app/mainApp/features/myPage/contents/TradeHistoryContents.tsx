import React from 'react';
import dayjs from 'dayjs';
import {PageTitle} from "@mainElements/title";
import {HistoryListType} from "@mainFeatures/myPage/types";
import {useRecoilValue} from "recoil";
import {TradeHistoryDateStats} from "@mainFeatures/myPage/states/TradeHistoryStates";
import ContainerMd from "@mainLayouts/container/ContainerMd/ContainerMd";
import {ListPanel} from "@mainFeatures/trade/components";
import {createImageUrl, formatDate} from "@/react/app/mainApp/functions/formatter";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import {TradeType} from "@/react/types/TradeType";
import TradeHistorySearch from "@mainFeatures/myPage/components/TradeHistorySearch/TradeHistorySearch";

const TradeHistoryContents: React.FC<HistoryListType> = ({tradeList}) => {
	const authUserData = useRecoilValue(IsAuthUserDataStates)
	const ViewMonth = useRecoilValue(TradeHistoryDateStats)
	const ListArray: TradeType[] = [];
	tradeList.map(data => {
		if (dayjs(data.updated_at).format('YYYY-MM') === ViewMonth){
			ListArray.push(data)
		}
	})

	return (
		<>
			<PageTitle en={'trade history'} jp={'交換履歴'}/>
			<ContainerMd>
				<TradeHistorySearch/>
				{ListArray.map((list)=>{
					const partnerUser = list.trade_producers.filter(tradeUser=>tradeUser.producer.uuid !== authUserData.uuid)[0]
					return(
						<ListPanel
							link={`/trade/${list.uuid}`}
							itemName={partnerUser.item.name}
							producerName={partnerUser.producer.organizationName}
							thumbnail={createImageUrl(partnerUser.item.thumbnail)}
							date={formatDate(list.created_at)}
							key={list.id}
						/>
					)
				})}
			</ContainerMd>
		</>
	);
};

export default TradeHistoryContents;
