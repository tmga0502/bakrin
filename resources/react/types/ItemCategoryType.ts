import {VarietyType} from "@/react/types/VarietyType";

export type ItemCategoryType = {
    [x: string]: any;
    id  :number,
    name: string,
	varieties: VarietyType[]
}
