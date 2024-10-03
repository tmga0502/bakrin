import {ItemType} from "@/react/types/ItemType";

export type ItemsListType = {
	title   : string,
	moreLink: string,
	data    : ItemType[] | undefined;
}
