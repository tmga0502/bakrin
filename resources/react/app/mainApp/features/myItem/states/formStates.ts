import {atom} from "recoil";
import {ItemVarietyType} from "@/react/types/ItemVarietyType";

export const FormCategoryStates = atom<string | number>({
	key: 'formCategoryStates',
	default: ''
})

export const FormVarietiesStates = atom<Array<ItemVarietyType>>({
	key: 'formVarietiesStates',
	default: []
})

export const FormVarietyStates = atom<string | number>({
	key: 'formVarietyStates',
	default: ''
})
