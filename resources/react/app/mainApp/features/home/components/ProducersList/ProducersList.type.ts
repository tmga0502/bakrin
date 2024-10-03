import {ProducerType} from "@/react/types/ProducerType";

export type ProducersListType = {
	title   : string,
	moreLink: string,
	data    : ProducerType[] | undefined;
}
