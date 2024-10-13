import {useMutation, useQueryClient} from "react-query";
import * as api from "@/react/api/api/ItemImageApi";
import {toast} from "react-toastify";
import {useSetRecoilState} from "recoil";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";

const useCreateImage = (setIsOpen: any) => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const queryClient = useQueryClient()
	return useMutation(api.createImage, {
		onMutate: () => {
			setIsLoading(true);
		},
		onSuccess: (data) => {
			setIsLoading(false)
			queryClient.invalidateQueries(['myItem', data.uuid])
			toast.success('登録しました')
			setIsOpen(false)
		},
		onError: () => {
			setIsLoading(false)
			toast.error('登録できませんでした。')
		}
	})
}

const useDeleteImage = (setIsOpen: any) => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const queryClient = useQueryClient()
	return useMutation(api.deleteImage, {
		onMutate: () => {
			setIsLoading(true);
		},
		onSuccess: (data) => {
			setIsLoading(false)
			queryClient.invalidateQueries(['myItem', data.uuid])
			toast.success('削除しました')
			setIsOpen(false)
		},
		onError: () => {
			setIsLoading(false)
			toast.error('削除できませんでした。')
			setIsOpen(false)
		}
	})
}

export {
	useCreateImage,
	useDeleteImage,
}
