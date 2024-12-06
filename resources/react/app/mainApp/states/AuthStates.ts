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
		referral_code: '',
		organization_name: '',
		president_name: '',
		postal_code: '',
		address1: '',
		address2: '',
		address3: '',
		address4: '',
		phone_number: '',
		thumbnail_path: '',
		email: '',
		login_id: '',
		password: '',
		payment_method: 0,
		pr: '',
		items: [],
		favorite_users: [],
		shipping_info: [],
	},
})
