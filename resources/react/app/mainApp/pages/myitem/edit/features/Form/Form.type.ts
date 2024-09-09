import {ItemType} from "@/react/types/ItemType";
import {ItemCategoryType} from "@/react/types/ItemCategoryType";
import {UnitType} from "@/react/types/UnitType";
import {PlanType} from "@/react/types/PlanType";

export type FormType = {
	itemData     : ItemType,
	categoryData : ItemCategoryType,
	unitData     : UnitType,
	planData     : PlanType,
}
