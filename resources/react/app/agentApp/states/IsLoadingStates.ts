import {atom} from "recoil";

export const AgentIsLoadingStates = atom<boolean>({
	key: 'AgentIsLoadingStates',
	default: false,
})
