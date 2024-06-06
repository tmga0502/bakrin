import {useMutation, useQueryClient} from "react-query";
import * as api from "@/ts/_api/api/FavoriteProducerApi";
import {toast} from "react-toastify";

const useRegisterFavoriteProducer = () => {
    const queryClient = useQueryClient()
    return useMutation(api.register, {
        onSuccess: () => {
            queryClient.invalidateQueries('favoriteProducer')
            toast.success('お気に入り登録しました。')
        },
        onError: () => {
            toast.error('登録できませんでした。\n画面をリロード後再度登録をお願いします。')
        }
    })
}

const useDeregisterFavoriteProducer = () => {
    const queryClient = useQueryClient()
    return useMutation(api.deregister, {
        onSuccess: () => {
            queryClient.invalidateQueries('favoriteProducer')
            toast.success('お気に入り登録を解除しました。')
        },
        onError: () => {
            toast.error('登録を解除できませんでした。\n画面をリロード後再度登録をお願いします。')
        }
    })
}


export {
    useRegisterFavoriteProducer,
    useDeregisterFavoriteProducer,
}
