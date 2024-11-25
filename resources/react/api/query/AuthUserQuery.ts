import {useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import * as api from "@/react/api/api/AuthUserApi";
import {toast} from "react-toastify";
import {useResetRecoilState, useSetRecoilState} from "recoil";
import {IsAuthUserDataStates, IsAuthUserStates} from "@/react/app/mainApp/states/AuthStates";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";

const usAuthUserCheck = () => {
	const setIsAuth   = useSetRecoilState(IsAuthUserStates)
	const setUserData = useSetRecoilState(IsAuthUserDataStates);
	const resetUserState = useResetRecoilState(IsAuthUserDataStates);
	return useQuery('authUser', () => api.getAuthCheck(),{
		suspense: true,
		onSuccess: (data) => {
			if (data.id > 0){
				setIsAuth(true)
				setUserData(data)
			}else{
				setIsAuth(false)
				resetUserState()
			}
		},
		onError: () => {
			setIsAuth(false)
			resetUserState()
		}
	})
}

const useLogin = () => {
	const setIsAuth   = useSetRecoilState(IsAuthUserStates)
    const setIsLoading  = useSetRecoilState(IsLoadingStates)
	const setUserData = useSetRecoilState(IsAuthUserDataStates);
    const navigate = useNavigate()
    return useMutation(api.login, {
        onSuccess: (data: any) => {
            setIsAuth(true)
			setUserData(data)
            navigate('/')
        },
        onError: () => {
            setIsLoading(false)
            toast.error('ログインIDもしくはパスワードが間違っています。')
        }
    })
}

const useLogout = () => {
	const setIsAuth   = useSetRecoilState(IsAuthUserStates)
    const setIsLoading = useSetRecoilState(IsLoadingStates)
    const navigate = useNavigate()
    return useMutation(api.logout, {
        onSuccess: () => {
            setIsAuth(false)
            navigate('/login')
        },
        onError: () => {
            setIsLoading(false)
            toast.error('エラーです')
        }
    })
}

export {
	usAuthUserCheck,
    useLogin,
    useLogout,
}
