import axios from "axios";
import {TradeType} from "@/react/types/TradeType";

const getTradeRequests = async () => {
	const{ data } = await axios.get<TradeType[]>('/api/trade/getTradeRequests');
	return data;
}

const getTradeRequest = async (uuid: string) => {
	const{ data } = await axios.get<TradeType[]>(`/api/trade/getTradeRequest/${uuid}`);
	return data;
}

export{
	getTradeRequests,
	getTradeRequest,
}
