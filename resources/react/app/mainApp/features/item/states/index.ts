import {atom} from "recoil";
import {ItemType} from "@/react/types/ItemType";

export const MyItemFormRequestStates = atom<ItemType | undefined>({
	key: 'MyItemFormRequestStates',
	default:undefined
})
