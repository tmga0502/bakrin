import {atom} from "recoil";

export const AuthorisedErrorState = atom<boolean>({
	key: 'AuthorisedError',
	default: false
})
