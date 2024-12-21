import {useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import * as api from "@/react/api/api/AuthAgentApi";
import {toast} from "react-toastify";
import {useResetRecoilState, useSetRecoilState} from "recoil";
import {AgentIsLoadingStates} from "@/react/app/agentApp/states/IsLoadingStates";
import {IsAgentAuthDataStates, IsAgentAuthStates} from "@/react/app/agentApp/states/AuthStates";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";

const usAuthAgentCheck = () => {
	const setIsAuth   = useSetRecoilState(IsAgentAuthStates)
	const setProducerData = useSetRecoilState(IsAgentAuthDataStates);
	const resetProducerState = useResetRecoilState(IsAgentAuthDataStates);
	return useQuery('authAgentUser', () => api.getAgentAuthCheck(),{
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

const useAgentRegister = (reset:any) => {
	const setIsLoading  = useSetRecoilState(IsLoadingStates)
	return useMutation(api.agentRegister, {
		onSuccess: (data: any) => {
			setIsLoading(false);
			toast.success('入力いただいたメールアドレス宛にメールを送信しました。ご確認ください。')
			reset();
		},
		onError: () => {
			setIsLoading(false)
			toast.error('登録できませんでした。画面更新後、再度必要情報を入力の上ご登録ください。')
		}
	})
}

const useAgentCompleteRegistration = (userUuid: string) => {
	return useQuery({
		queryKey: ['registration'],
		queryFn: ()=>api.agentCompleteRegistration(userUuid),
	})
}

const useAgentLogin = () => {
	const setIsAuth   = useSetRecoilState(IsAgentAuthStates)
    const setIsLoading  = useSetRecoilState(AgentIsLoadingStates)
	const setProducerData = useSetRecoilState(IsAgentAuthDataStates);
    const navigate = useNavigate()
    return useMutation(api.agentLogin, {
        onSuccess: (data) => {
            setIsAuth(true)
			setProducerData(data)
            navigate('/agent')
        },
        onError: () => {
            setIsLoading(false)
            toast.error('ログインIDもしくはパスワードが間違っています。')
        }
    })
}

const useAgentLogout = () => {
	const setIsAuth   = useSetRecoilState(IsAgentAuthStates)
    const setIsLoading = useSetRecoilState(AgentIsLoadingStates)
    const navigate = useNavigate()
    return useMutation(api.agentLogout, {
        onSuccess: () => {
            setIsAuth(false)
            navigate('/agent/login')
        },
        onError: () => {
            setIsLoading(false)
            toast.error('エラーです')
        }
    })
}


export {
	usAuthAgentCheck,
	useAgentRegister,
	useAgentCompleteRegistration,
    useAgentLogin,
    useAgentLogout,
}
