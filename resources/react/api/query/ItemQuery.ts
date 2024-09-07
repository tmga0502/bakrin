import {useMutation, useQuery} from "react-query";
import * as api from "@/react/api/api/ItemApi";
import {toast} from "react-toastify";
import {useIsLoading} from "@/react/app/mainApp/hooks/IsLoadingContext";


const useGetItem = (itemUuid: any) => {
    return useQuery(['item', itemUuid], ()=>api.getItem(itemUuid),{
		suspense: true,
	})
}

const useGetMyItems = () => {
    return useQuery(['myItems'], ()=>api.getMyItems(),{
		suspense: true,
	})
}

const useGetFavoriteItems = () => {
    return useQuery('favoriteItems', ()=>api.getFavoriteItems(),{
		suspense: true,
	})
}

const useGetNewArrivalItems = () => {
    return useQuery('newArrivalItems', ()=>api.getNewArrivalItems(),{
		suspense: true,
	})
}

const useGetSeasonItems = () => {
    return useQuery('seasonItems', ()=>api.getSeasonItems(),{
		suspense: true,
	})
}

const useGetWantItems = () => {
    return useQuery('wantItems', ()=>api.getWantItems(),{
		suspense: true,
	})
}

const useUpdateItem = () => {
	const { setIsLoading} = useIsLoading()
	return useMutation(api.updateItem, {
		onMutate: () => {
			setIsLoading(true);
		},
		onSuccess: () => {
			setIsLoading(false)
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
