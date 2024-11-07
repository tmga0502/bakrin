import {ItemType} from "@/react/types/ItemType";
import {UserType} from "@/react/types/UserType";
import {TradeType} from "@/react/types/TradeType";
import {ItemCategoryType} from "@/react/types/ItemCategoryType";
import { WantItemType } from "@/react/types/WantItemType";

export type ItemsDataType = {
	itemsData: ItemType[]
}

export type ProducersDataType = {
	producersData: UserType[]
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
