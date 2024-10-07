import React from 'react';
import {PageTitle} from "@/react/app/mainApp/components/elements/title";
import {TradeImageBox, ButtonBox} from "@/react/app/mainApp/features/recieveRequest/receiveRequest-show/components";
import {receiveRequestType} from "@/react/app/mainApp/features/recieveRequest/receiveRequest-show/types/type";


const Index: React.FC<receiveRequestType> = ({tradeRequestData}) => {

	return (
		<div>
			<PageTitle en={'RECEIVE REQUEST'} jp={'申請確認'}/>
			<TradeImageBox tradeRequestData={tradeRequestData}/>
			<ButtonBox/>
		</div>
	);
};

export default Index;
