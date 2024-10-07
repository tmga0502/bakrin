import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import TradeImageBox from "./components/TradeImageBox/TradeImageBox";
import Chat from "./components/Chat/Chat";
import {TradeType} from "@/react/types/TradeType";

type IndexType = {
	data: TradeType
}

const Index: React.FC<IndexType> = ({data}) => {
	return (
		<>
			<PageTitle en={'Trade'} jp={'取引詳細'}/>

			<div className="grid xl:grid-cols-2">
				<div className="grid-item">
					<TradeImageBox data={data}/>
				</div>
				<div className="grid-item">
					<Chat/>
				</div>
			</div>
		</>
	);
};

export default Index;
