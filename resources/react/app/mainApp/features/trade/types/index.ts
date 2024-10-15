import {TradeType} from "@/react/types/TradeType";


export type tradeRequestsType = {
	tradeRequestsData: TradeType[]
}

export type tradeRequestType = {
	tradeRequestData: TradeType
}

export type TradeListPageType = {
	ongoingTradesData: TradeType[],
	pendingTradesData: TradeType[],
}
