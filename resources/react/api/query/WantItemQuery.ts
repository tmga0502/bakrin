import {useMutation, useQuery, useQueryClient} from "react-query";
import * as api from "@/react/api/api/WantItemApi";
import {toast} from "react-toastify";


const useGetAllWantItems = () => {
    return useQuery(['wntItems'], ()=>api.getAllWantItems(),{
		suspense: true,
	})
}

const useCreateWantItem = () => {
	const queryClient = useQueryClient()
	return useMutation(api.CreateWantItem, {
		onSuccess: () => {
			queryClient.invalidateQueries(['wntItems'])
			toast.success('登録しました')
		},
		onError: () => {
			toast.error('登録できませんでした。')
		}
	})
}

const useRemoveWantItem = () => {
	const queryClient = useQueryClient()
	return useMutation(api.RemoveWantItem, {
		onSuccess: () => {
			queryClient.invalidateQueries(['wntItems'])
			toast.success('登録解除しました')
		},
		onError: () => {
			toast.error('登録解除できませんでした。')
		}
	})
}

export {
	useGetAllWantItems,
	useCreateWantItem,
	useRemoveWantItem,
}
