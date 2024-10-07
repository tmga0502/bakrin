import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import {TradeType} from "@/react/types/TradeType";
import {formatDate} from "@/react/app/mainApp/functions/formatter";
import Panel from './components/Panel/Panel'

type IndexType ={
	data: TradeType[]
}

const Index: React.FC<IndexType> = ({data}) => {
	return (
		<div>
			<PageTitle en={'RECEIVE REQUEST'} jp={'申請依頼'}/>
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
		</div>
	);
};

export default Index;
