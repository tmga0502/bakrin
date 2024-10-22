import {atom} from "recoil";

export const AdminIsLoadingStates = atom<boolean>({
	key: 'AdminIsLoadingStates',
	default: false,
})
