import {ItemType} from "@/react/types/ItemType";
import {ItemCategoryType} from "@/react/types/ItemCategoryType";
import {ItemVarietyType} from "@/react/types/ItemVarietyType";
import {UnitType} from "@/react/types/UnitType";
import {PlanType} from "@/react/types/PlanType";

export type ItemDataType = {
	itemData: ItemType
}

export type ItemDatasType = {
	itemDatas: ItemType[]
}

export type ImageDataType = {
	imageId: string
}

export type NewPagePropsType = {
	categoriesData : ItemCategoryType[],
	varietiesData: ItemVarietyType[],
	unitData     : UnitType[],
	planData     : PlanType[],
}

export type EditPagePropsType = {
	itemData       : ItemType,
	categoriesData : ItemCategoryType[],
	varietiesData  : ItemVarietyType[],
	unitData       : UnitType[],
	planData       : PlanType[],
}
