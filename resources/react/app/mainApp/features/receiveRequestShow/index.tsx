import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import {TradeType} from "@/react/types/TradeType";
import TradeImageBox from "@/react/app/mainApp/features/receiveRequestShow/components/TradeImageBox/TradeImageBox";
import ButtonBox from "@/react/app/mainApp/features/receiveRequestShow/components/ButtonBox/ButtonBox";

type IndexType = {
	data: TradeType
}

const Index: React.FC<IndexType> = ({data}) => {

	return (
		<div>
			<PageTitle en={'RECEIVE REQUEST'} jp={'申請確認'}/>
			<TradeImageBox data={data}/>
			<ButtonBox/>
		</div>
	);
};

export default Index;
