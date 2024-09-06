import {useAuth} from "@/react/app/mainApp/hooks/AuthContext";
import {useIsLoading} from "@/react/app/mainApp/hooks/IsLoadingContext";
import {useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import * as api from "@/react/api/api/AuthApi";
import {toast} from "react-toastify";

const useGetUser = () => {
    return useQuery('user', api.getUser)
}

const useLogin = () => {
    const { setIsAuth } = useAuth()
    const { setIsLoading } = useIsLoading()
    const navigate = useNavigate()
    return useMutation(api.login, {
        onSuccess: () => {
            setIsAuth(true)
            navigate('/')
        },
        onError: () => {
            setIsLoading(false)
            toast.error('ログインIDもしくはパスワードが間違っています。')
        }
    })
}

const useLogout = () => {
    const { setIsAuth } = useAuth()
    const { setIsLoading } = useIsLoading()
    const navigate = useNavigate()
    return useMutation(api.logout, {
        onSuccess: () => {
            setIsAuth(false)
            navigate('/login')
        },
        onError: () => {
            setIsLoading(false)
            toast.error('登録しました。')
        }
    })
}

export {
    useGetUser,
    useLogin,
    useLogout,
}
