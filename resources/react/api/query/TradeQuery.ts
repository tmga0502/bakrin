import {useQuery} from "react-query";
import * as api from "@/react/api/api/TradeApi";

const useGetTradeRequests = () => {
	return useQuery('tradeRequests', ()=>api.getTradeRequests(),{
		suspense: true,
	})
}

const useGetTrades = () => {
	return useQuery('trades', ()=>api.getTrades(),{
		suspense: true,
	})
}

const useGetTrade = (uuid: string) => {
	return useQuery(['trade', uuid], ()=>api.getTrade(uuid),{
		suspense: true,
	})
}

export {
	useGetTradeRequests,
	useGetTrades,
	useGetTrade,
}
