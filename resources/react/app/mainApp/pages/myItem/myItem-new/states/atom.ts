import {atom} from "recoil";
import {ItemCategoryType} from "@/react/types/ItemCategoryType";
import {VarietyType} from "@/react/types/VarietyType";
import {UnitType} from "@/react/types/UnitType";
import {PlanType} from "@/react/types/PlanType";

export const categoryDataState = atom<ItemCategoryType[]>({
	key: 'categoryDataState',
	default: []
})

export const varietiesDataState = atom<VarietyType[]>({
	key: 'varietiesDataState',
	default:[]
})

export const unitDataState = atom<UnitType[]>({
	key: 'unitDataState',
	default:[]
})

export const planDataState = atom<PlanType[]>({
	key: 'planDataState',
	default:[],
})
