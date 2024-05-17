import {useMutation, useQuery, useQueryClient} from "react-query";
import * as api from "@/ts/_api/api/FavoriteItemApi";
import {toast} from "react-toastify";


const useGetFavoriteItemState = (itemUuid: any) => {
    return useQuery(['favoriteItemState', itemUuid], ()=>api.getFavoriteItemState(itemUuid))
}

const useRegisterFavoriteItem = () => {
    const queryClient = useQueryClient()
    // const { setIsLoading } = useIsLoading()
    return useMutation(api.register, {
        onSuccess: () => {
            // setIsLoading(false)
            queryClient.invalidateQueries('favorite')
            toast.success('お気に入り登録しました。')
        },
        onError: () => {
            // setIsLoading(false)
            toast.error('登録できませんでした。\n画面をリロード後再度登録をお願いします。')
        }
    })
}

const useDeregisterFavoriteItem = () => {
    const queryClient = useQueryClient()
    // const { setIsLoading } = useIsLoading()
    return useMutation(api.deregister, {
        onSuccess: () => {
            // setIsLoading(false)
            queryClient.invalidateQueries('art')
            toast.success('お気に入り登録を解除しました。')
        },
        onError: () => {
            // setIsLoading(false)
            toast.error('登録を解除できませんでした。\n画面をリロード後再度登録をお願いします。')
        }
    })
}


export {
    useGetFavoriteItemState,
    useRegisterFavoriteItem,
    useDeregisterFavoriteItem,
}
