import {atom} from "recoil"
import {PlanType} from "@/react/types/PlanType";
import {ItemType} from "@/react/types/ItemType";

const SearchPlanListStates = atom<PlanType[]>({
	key: "SearchPlanListStates",
	default: [],
})

const SearchPlanResultStates = atom<ItemType[]>({
	key: 'SearchPlanResultStates',
	default: [],
})

export {
	SearchPlanListStates,
	SearchPlanResultStates,
}
