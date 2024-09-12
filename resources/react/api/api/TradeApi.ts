import axios from "axios";
import {TradeType} from "@/react/types/TradeType";

const getTradeRequests = async () => {
	const{ data } = await axios.get<TradeType[]>('/api/trade/getTradeRequests');
	return data;
}

const getTrades = async () => {
	const{ data } = await axios.get<TradeType[]>('/api/trade/getTrades');
	return data;
}

const getTrade = async (uuid: string) => {
	const{ data } = await axios.get<TradeType>(`/api/trade/getTrade/${uuid}`);
	return data;
}

export{
	getTradeRequests,
	getTrades,
	getTrade
}
