import {atom} from "recoil";
import {VarietyType} from "@/react/types/VarietyType";

export const FormCategoryStates = atom<string | number>({
	key: 'formCategoryStates',
	default: ''
})

export const FormVarietiesStates = atom<Array<VarietyType>>({
	key: 'formVarietiesStates',
	default: []
})

export const FormVarietyStates = atom<string | number>({
	key: 'formVarietyStates',
	default: ''
})
