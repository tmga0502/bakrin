import {ItemType} from "@/react/types/ItemType";
import {ProducerType} from "@/react/types/ProducerType";
import {TradeType} from "@/react/types/TradeType";
import {ItemCategoryType} from "@/react/types/ItemCategoryType";
import { WantItemType } from "@/react/types/WantItemType";

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

export type WantDataType = {
	wantItemsData  : WantItemType[],
	categoriesData: ItemCategoryType[]
}
