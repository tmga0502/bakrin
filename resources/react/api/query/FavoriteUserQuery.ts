import {useMutation, useQueryClient} from "react-query";
import * as api from "@/react/api/api/FavoriteUserApi";
import {toast} from "react-toastify";

const useRegisterFavoriteUser = () => {
    const queryClient = useQueryClient()
    return useMutation(api.register, {
        onSuccess: () => {
            queryClient.invalidateQueries('favoriteUser')
            toast.success('お気に入り登録しました。')
        },
        onError: () => {
            toast.error('登録できませんでした。\n画面をリロード後再度登録をお願いします。')
        }
    })
}

const useDeregisterFavoriteUser = () => {
    const queryClient = useQueryClient()
    return useMutation(api.deregister, {
        onSuccess: () => {
            queryClient.invalidateQueries('favoriteUser')
            toast.success('お気に入り登録を解除しました。')
        },
        onError: () => {
            toast.error('登録を解除できませんでした。\n画面をリロード後再度登録をお願いします。')
        }
    })
}


export {
    useRegisterFavoriteUser,
    useDeregisterFavoriteUser,
}
