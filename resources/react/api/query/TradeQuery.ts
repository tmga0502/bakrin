import {useQuery} from "react-query";
import * as api from "@/react/api/api/TradeApi";

const useGetTradeRequests = () => {
	return useQuery('tradeRequests', ()=>api.getTradeRequests(),{
		suspense: true,
	})
}

const useGetTradeRequest = (uuid: string) => {
	return useQuery(['tradeRequest', uuid], ()=>api.getTradeRequest(uuid),{
		suspense: true,
	})
}

export {
	useGetTradeRequests,
	useGetTradeRequest,
}
