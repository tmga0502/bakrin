import {ItemType} from "@/react/types/ItemType";
import {ProducerType} from "@/react/types/ProducerType";

export type IndexType = {
	newArrivalItemsData: ItemType[],
	wantItemsData: ItemType[],
	seasonItemsData: ItemType[],
	favoriteItemsData: ItemType[],
	popularProducersData: ProducerType[],
}
