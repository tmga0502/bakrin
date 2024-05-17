import {SetStateAction} from "react";
import {useAuth} from "@/ts/hooks/AuthContext";
import {useIsLoading} from "@/ts/hooks/IsLoadingContext";
import {useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import * as api from "@/ts/_api/api/AuthApi";
import {toast} from "react-toastify";
import {AuthToken} from "@/ts/types/AuthTokenType";

const setSession = async (user: AuthToken, setIsAuth: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }): Promise<void> =>{
    sessionStorage.setItem('bakrinAuthToken', user.token);
    sessionStorage.setItem('bakrinAuthOrganizationName', user.organizationName);
    setIsAuth(true)
}

const removeSession  = async (setIsAuth: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }): Promise<void> =>{
    sessionStorage.removeItem('bakrinAuthToken');
    sessionStorage.removeItem('bakrinAuthOrganizationName');
    setIsAuth(false)
}

const useGetUser = () => {
    return useQuery('user', api.getUser)
}

const useLogin = () => {
    const { setIsAuth } = useAuth()
    const { setIsLoading } = useIsLoading()
    const navigate = useNavigate()
    return useMutation(api.login, {
        onSuccess: (user) => {
            setIsLoading(false)
            if(user){
                setSession(user, setIsAuth).then(() => {
                    navigate('/')
                })
            }
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
        onSuccess: (status) => {
            if(status){
                setIsLoading(false)
                removeSession(setIsAuth).then(() => {
                    navigate('/login')
                })
            }
        },
        onError: () => {
            setIsLoading(false)
            toast.error('ログアウトに失敗しました。')
        }
    })
}

export {
    useGetUser,
    useLogin,
    useLogout,
}
