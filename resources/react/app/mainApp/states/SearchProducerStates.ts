import {atom} from 'recoil'
import {ProducerType} from "@/react/types/ProducerType";

const SearchProducerNameStates = atom<string>({
	key: 'SearchProducerNameStates',
	default: '',
})

const SearchProducerPrefectureStates = atom<string>({
	key: 'SearchProducerPrefectureStates',
	default: '',
})

const SearchProducerResultStates = atom<ProducerType[]>({
	key: 'SearchProducerResultStates',
	default: [],
})

export {
	SearchProducerNameStates,
	SearchProducerPrefectureStates,
	SearchProducerResultStates,
}
