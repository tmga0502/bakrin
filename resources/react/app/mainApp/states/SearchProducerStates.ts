import {atom} from 'recoil'
import {UserType} from "@/react/types/UserType";

const SearchProducerNameStates = atom<string>({
	key: 'SearchProducerNameStates',
	default: '',
})

const SearchProducerPrefectureStates = atom<string>({
	key: 'SearchProducerPrefectureStates',
	default: '',
})

const SearchProducerResultStates = atom<UserType[]>({
	key: 'SearchProducerResultStates',
	default: [],
})

export {
	SearchProducerNameStates,
	SearchProducerPrefectureStates,
	SearchProducerResultStates,
}
