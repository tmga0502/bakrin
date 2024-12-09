import {useMutation, useQueryClient} from "react-query";
import * as api from "@/react/api/api/ShippingInfoApi";
import {toast} from "react-toastify";
import {useSetRecoilState} from "recoil";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";


const useCreate = (reset: any, setMode:any) => {
	const queryClient = useQueryClient()
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	return useMutation(api.create, {
		onSuccess: () => {
			setIsLoading(false)
			queryClient.invalidateQueries('authUser')
			toast.success('届け先住所を登録しました。')
			reset()
			setMode('登録済みから選択')
		},
		onError: () => {
			setIsLoading(false)
			toast.error('登録できませんでした。')
		}
	})
}


export {
	useCreate,
}
