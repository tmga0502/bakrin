import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import {TradeType} from "@/react/types/TradeType";
import Panel from "@/react/app/mainApp/features/trade/trade-list/components/Panel/Panel";
import {formatDate} from "@/react/app/mainApp/functions/formatter";

type IndexType = {
	data: TradeType[]
}

const Index: React.FC<IndexType> = ({data}) => {
	return (
		<>
			<PageTitle en={'TRADE'} jp={'取引一覧'}/>
			{data.map((list:TradeType)=>{
				const partnerProducer = list.trade_producers.filter(producer=>producer.type === 'sender')[0]
				return(
					<Panel
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

export default Index;
