import {atom} from "recoil";
import {AdminUserType} from "@/react/types/AdminUserType";

export const IsAuthStates = atom<boolean>({
	key: 'AuthStates',
	default: false,
})

export const IsAuthDataStates = atom<AdminUserType>({
	key: 'IsAuthDataStates',
	default:  {
		id: 0,
		name: '',
		authority: 1,
		loginId: '',
	},
})
