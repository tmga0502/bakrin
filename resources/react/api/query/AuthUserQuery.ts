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

const useRegister = () => {
	const setIsLoading  = useSetRecoilState(IsLoadingStates)
	const navigate = useNavigate()
	return useMutation(api.register, {
		onSuccess: (data: any) => {
			setIsLoading(false);
			navigate('/register_completed')
		},
		onError: () => {
			setIsLoading(false)
			toast.error('登録できませんでした。画面更新後、再度必要情報を入力の上ご登録ください。')
		}
	})
}

const useCompleteRegistration = (userUuid: string) => {
	return useQuery({
		queryKey: ['registration'],
		queryFn: ()=>api.getCompleteRegistration(userUuid),
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
	useRegister,
	useCompleteRegistration,
    useLogin,
    useLogout,
}
