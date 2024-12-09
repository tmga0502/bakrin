import axios from "axios";
import {TradeType} from "@/react/types/TradeType";

const getTradeRequests = async () => {
	const{ data } = await axios.get<TradeType[]>('/api/trade/getTradeRequests');
	return data;
}

const getOngoingTrades = async () => {
	const{ data } = await axios.get<TradeType[]>('/api/trade/getOngoingTrades');
	return data;
}

const getPendingTrades = async () => {
	const{ data } = await axios.get<TradeType[]>('/api/trade/getPendingTrades');
	return data;
}

const getCompletedTrades = async () => {
	const{ data } = await axios.get<TradeType[]>('/api/trade/getCompletedTrades');
	return data;
}

const getTrade = async (uuid: string) => {
	const{ data } = await axios.get<TradeType>(`/api/trade/getTrade/${uuid}`);
	return data;
}

const requestTrade = async (formData: any) => {
	const{ data } = await axios.post<TradeType>('/api/trade/requestTrade', formData);
	return data;
}

const requestPermission = async (formData: any) => {
	const{ data } = await axios.post<TradeType>('/api/trade/requestPermission', formData);
	return data;
}

const requestReject = async (formData: any) => {
	const{ data } = await axios.post<TradeType>('/api/trade/requestReject', formData);
	return data;
}

const updateShippingId = async (formData: any) => {
	const{ data } = await axios.post<TradeType>('/api/trade/updateShippingId', formData);
	return data;
}

export{
	getTradeRequests,
	getOngoingTrades,
	getPendingTrades,
	getCompletedTrades,
	getTrade,
	requestTrade,
	requestPermission,
	requestReject,
	updateShippingId,
}
