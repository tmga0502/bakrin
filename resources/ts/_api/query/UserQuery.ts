import {useMutation, useQuery, useQueryClient} from "react-query";
import * as api from "@/ts/_api/api/UserApi";
import {toast} from "react-toastify";

const useChangePassword = () => {
    const queryClient = useQueryClient()
    // const { setIsLoading } = useIsLoading()
    return useMutation(api.changePassword, {
        onSuccess: () => {
            // setIsLoading(false)
            queryClient.invalidateQueries('password')
            toast.success('パスワードを変更しました。')
        },
        onError: () => {
            // setIsLoading(false)
            toast.error('パスワードを変更できませんでした。\n現在のパスワードをお確かめの上、再度更新してください')
        }
    })
}

export {
    useChangePassword
}
