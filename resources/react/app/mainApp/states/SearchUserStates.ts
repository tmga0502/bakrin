import {atom} from 'recoil'
import {UserType} from "@/react/types/UserType";

const SearchUserNameStates = atom<string>({
	key: 'SearchUserNameStates',
	default: '',
})

const SearchUserPrefectureStates = atom<string>({
	key: 'SearchUserPrefectureStates',
	default: '',
})

const SearchUserResultStates = atom<UserType[]>({
	key: 'SearchUserResultStates',
	default: [],
})

export {
	SearchUserNameStates,
	SearchUserPrefectureStates,
	SearchUserResultStates,
}
