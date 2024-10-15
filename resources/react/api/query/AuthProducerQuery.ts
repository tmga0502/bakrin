import {useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import * as api from "@/react/api/api/AuthProducerApi";
import {toast} from "react-toastify";
import {useResetRecoilState, useSetRecoilState} from "recoil";
import {IsAuthProducerDataStates, IsAuthProducerStates} from "@/react/app/mainApp/states/AuthStates";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";

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
    const setIsLoading  = useSetRecoilState(IsLoadingStates)
	const setProducerData = useSetRecoilState(IsAuthProducerDataStates);
    const navigate = useNavigate()
    return useMutation(api.login, {
        onSuccess: (data) => {
            setIsAuth(true)
			setProducerData(data)
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
    const setIsLoading = useSetRecoilState(IsLoadingStates)
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
