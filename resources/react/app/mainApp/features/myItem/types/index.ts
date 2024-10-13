import {ItemType} from "@/react/types/ItemType";
import {ItemCategoryType} from "@/react/types/ItemCategoryType";
import {VarietyType} from "@/react/types/VarietyType";
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
	varietiesData: VarietyType[],
	unitData     : UnitType[],
	planData     : PlanType[],
}
