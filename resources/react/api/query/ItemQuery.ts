import {useMutation, useQuery, useQueryClient} from "react-query";
import * as api from "@/react/api/api/ItemApi";
import {toast} from "react-toastify";
import {useQueryWrapper} from "@/react/api/function/useQueryWrapper";
import {useSetRecoilState} from "recoil";
import {AuthorisedErrorState} from "@/react/app/mainApp/states/ErrorStates";
import {useNavigate} from "react-router-dom";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";

const useGetItem = (itemUuid: any) => {
    return useQuery(['item', itemUuid], ()=>api.getItem(itemUuid))
}

const useGetMyItems = () => {
    return useQuery(['myItems'], ()=>api.getMyItems())
}

const useGetMyItem = (itemUuid: any) => {
	const setAuthError = useSetRecoilState(AuthorisedErrorState)
	return useQuery(['myItem'], ()=>api.getMyItem(itemUuid),{
		onError: () => {
			setAuthError(true)
		},
		onSuccess: ()=>{
			setAuthError(false)
		}
	})
}

const useGetFavoriteItems = () => {
    return useQueryWrapper('favoriteItems', ()=>api.getFavoriteItems())
}

const useGetNewArrivalItems = () => {
    return useQueryWrapper('newArrivalItems', ()=>api.getNewArrivalItems())
}

const useGetSeasonItems = () => {
    return useQueryWrapper('seasonItems', ()=>api.getSeasonItems())
}

const useGetWantItems = () => {
    return useQueryWrapper('wantItems', ()=>api.getWantItems())
}

const useCreateItem = () => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const queryClient = useQueryClient()
	const navigate = useNavigate()
	return useMutation(api.CreateItem, {
		onMutate: () => {
			setIsLoading(true);
		},
		onSuccess: () => {
			setIsLoading(false)
			queryClient.invalidateQueries('myItems')
			toast.success('登録しました')
			navigate('/myitem')
		},
		onError: () => {
			setIsLoading(false)
			toast.error('登録できませんでした。')
		}
	})
}

const useUpdateItem = () => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
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

const useDeleteItem = (setIsOpen: any) => {
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	const navigate = useNavigate()
	return useMutation(api.deleteItem, {
		onMutate: () => {
			setIsLoading(true);
		},
		onSuccess: () => {
			setIsLoading(false)
			toast.success('削除しました')
			navigate('/myitem')
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
    useGetItem,
    useGetMyItems,
	useGetMyItem,
    useGetFavoriteItems,
    useGetNewArrivalItems,
    useGetSeasonItems,
    useGetWantItems,
	useCreateItem,
	useUpdateItem,
	useDeleteItem,
}
