import {atom} from 'recoil'
import {UserType} from "@/react/types/UserType";

export const IsAuthUserStates = atom<boolean | undefined>({
    key: 'IsAuthUserStates',
    default: false
})

export const IsAuthUserDataStates = atom<UserType>({
    key: 'IsAuthUserDataStates',
    default:  {
		id: 0,
		uuid: '',
		organizationName: '',
		presidentName: '',
		postalCode: '',
		address1: '',
		address2: '',
		address3: '',
		address4: '',
		tel: '',
		imgPath: '',
		email: '',
		login_id: '',
		password: '',
		paymentMethod: 0,
		pr: '',
		items: [],
		favorite_producers: [],
	},
})
