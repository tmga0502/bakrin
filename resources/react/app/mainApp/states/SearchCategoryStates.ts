import {atom} from "recoil"
import {ItemType} from "@/react/types/ItemType";

const SearchCategoryStates = atom<string>({
	key: "SearchCategoryStates",
	default: ""
})

const SearchCategoryResultStates = atom<ItemType[]>({
	key: "SearchCategoryResultStates",
	default: [],
})

export {
	SearchCategoryStates,
	SearchCategoryResultStates,
}
