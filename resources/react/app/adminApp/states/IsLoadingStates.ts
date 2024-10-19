import {atom} from "recoil";

export const IsLoadingStates = atom<boolean>({
	key: 'IsLoadingStates',
	default: false,
})
