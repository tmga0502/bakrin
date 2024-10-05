import {useIsLoading} from "@/react/app/mainApp/hooks/IsLoadingContext";
import {useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import * as api from "@/react/api/api/AuthProducerApi";
import {toast} from "react-toastify";
import {useResetRecoilState, useSetRecoilState} from "recoil";
import {IsAuthProducerDataStates, IsAuthProducerStates} from "@/react/app/mainApp/states/AuthStates";

const usAuthProducerCheck = () => {
	const setIsAuth   = useSetRecoilState(IsAuthProducerStates)
	const setProducerData = useSetRecoilState(IsAuthProducerDataStates);
	const resetProducerState = useResetRecoilState(IsAuthProducerDataStates);
	return useQuery('authProducer', () => api.getAuthCheck(),{
		suspense: true,
		onSuccess: (data) => {
			if (data.id > 0){
				setIsAuth(true)
				setProducerData(data)
			}else{
				setIsAuth(false)
				resetProducerState()
			}
		},
		onError: () => {
			setIsAuth(false)
			resetProducerState()
		}
	})
}

const useLogin = () => {
	const setIsAuth   = useSetRecoilState(IsAuthProducerStates)
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
	const setIsAuth   = useSetRecoilState(IsAuthProducerStates)
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
	usAuthProducerCheck,
    useLogin,
    useLogout,
}
