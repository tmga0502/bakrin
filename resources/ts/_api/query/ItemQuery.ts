import {useMutation, useQuery} from "react-query";
import * as api from "@/ts/_api/api/ItemApi";
import {toast} from "react-toastify";
import {useIsLoading} from "@/ts/hooks/IsLoadingContext";


const useGetItem = (itemUuid: any) => {
    return useQuery(['item', itemUuid], ()=>api.getItem(itemUuid))
}

const useGetMyItems = () => {
    return useQuery(['myItems'], ()=>api.getMyItems())
}

const useGetFavoriteItems = () => {
    return useQuery('favoriteItems', api.getFavoriteItems)
}

const useGetNewArrivalItems = () => {
    return useQuery('newArrivalItems', api.getNewArrivalItems)
}

const useGetSeasonItems = () => {
    return useQuery('seasonItems', api.getSeasonItems)
}

const useGetWantItems = () => {
    return useQuery('wantItems', api.getWantItems)
}

const useUpdateItem = () => {
	const { setIsLoading} = useIsLoading()
	return useMutation(api.updateItem, {
		onSuccess: () => {
			toast.success('更新しました')
		},
		onError: () => {
			setIsLoading(false)
			toast.error('更新できませんでした。')
		}
	})
}

export {
    useGetItem,
    useGetMyItems,
    useGetFavoriteItems,
    useGetNewArrivalItems,
    useGetSeasonItems,
    useGetWantItems,
	useUpdateItem,
}
