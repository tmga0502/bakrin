import {ItemType} from "@/react/types/ItemType";
import {ProducerType} from "@/react/types/ProducerType";
import {TradeType} from "@/react/types/TradeType";

export type ItemsDataType = {
	itemsData: ItemType[]
}

export type ProducersDataType = {
	producersData: ProducerType[]
}

export type CardTitleType = {
	title: string,
}

export type HistoryListType = {
	tradeList: TradeType[];
}


type historiesType = {
	itemName    : string,
	producerName: string,
	thumbnail   : string
}

export type HistoryDataType = {
	date: string,
	histories: Array<historiesType>
}
