import {atom} from 'recoil'
import {ProducerType} from "@/react/types/ProducerType";

export const IsAuthProducerStates = atom<boolean | undefined>({
    key: 'IsAuthProducerStates',
    default: false
})

export const IsAuthProducerDataStates = atom<ProducerType>({
    key: 'IsAuthProducerDataStates',
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
