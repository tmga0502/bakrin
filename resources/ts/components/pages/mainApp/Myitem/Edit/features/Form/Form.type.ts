import {ItemType} from "@/ts/types/ItemType";
import {ItemCategoryType} from "@/ts/types/ItemCategoryType";
import {UnitType} from "@/ts/types/UnitType";
import {PlanType} from "@/ts/types/PlanType";

export type FormType = {
	itemData     : ItemType,
	categoryData : ItemCategoryType,
	unitData     : UnitType,
	planData     : PlanType,
}
