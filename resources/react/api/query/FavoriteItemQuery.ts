import {useMutation, useQuery, useQueryClient} from "react-query";
import * as api from "@/react/api/api/FavoriteItemApi";
import {toast} from "react-toastify";


const useGetFavoriteItemState = (itemUuid: any) => {
    return useQuery(['favoriteItemState', itemUuid], ()=>api.getFavoriteItemState(itemUuid),{
		suspense: true,
	})
}

const useRegisterFavoriteItem = () => {
    const queryClient = useQueryClient()
    return useMutation(api.register, {
        onSuccess: () => {
            queryClient.invalidateQueries('favorite')
            toast.success('お気に入り登録しました。')
        },
        onError: () => {
            toast.error('登録できませんでした。\n画面をリロード後再度登録をお願いします。')
        }
    })
}

const useDeregisterFavoriteItem = () => {
    const queryClient = useQueryClient()
    return useMutation(api.deregister, {
        onSuccess: () => {
            queryClient.invalidateQueries('favorite')
            toast.success('お気に入り登録を解除しました。')
        },
        onError: () => {
            toast.error('登録を解除できませんでした。\n画面をリロード後再度登録をお願いします。')
        }
    })
}


export {
    useGetFavoriteItemState,
    useRegisterFavoriteItem,
    useDeregisterFavoriteItem,
}
