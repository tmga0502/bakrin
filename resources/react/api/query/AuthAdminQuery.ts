import {useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import * as api from "@/react/api/api/AuthAdminApi";
import {toast} from "react-toastify";
import {useResetRecoilState, useSetRecoilState} from "recoil";
import {IsLoadingStates} from "@/react/app/adminApp/states/IsLoadingStates";
import {IsAuthDataStates, IsAuthStates} from "@/react/app/adminApp/states/AuthStates";

const usAuthAdminCheck = () => {
	const setIsAuth   = useSetRecoilState(IsAuthStates)
	const setProducerData = useSetRecoilState(IsAuthDataStates);
	const resetProducerState = useResetRecoilState(IsAuthDataStates);
	return useQuery('authAdminUser', () => api.getAdminAuthCheck(),{
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

const useAdminLogin = () => {
	const setIsAuth   = useSetRecoilState(IsAuthStates)
    const setIsLoading  = useSetRecoilState(IsLoadingStates)
	const setProducerData = useSetRecoilState(IsAuthDataStates);
    const navigate = useNavigate()
    return useMutation(api.adminLogin, {
        onSuccess: (data) => {
            setIsAuth(true)
			setProducerData(data)
            navigate('/admin')
        },
        onError: () => {
            setIsLoading(false)
            toast.error('ログインIDもしくはパスワードが間違っています。')
        }
    })
}

const useAdminLogout = () => {
	const setIsAuth   = useSetRecoilState(IsAuthStates)
    const setIsLoading = useSetRecoilState(IsLoadingStates)
    const navigate = useNavigate()
    return useMutation(api.adminLogout, {
        onSuccess: () => {
            setIsAuth(false)
            navigate('/admin/login')
        },
        onError: () => {
            setIsLoading(false)
            toast.error('エラーです')
        }
    })
}


export {
	usAuthAdminCheck,
    useAdminLogin,
    useAdminLogout,
}
