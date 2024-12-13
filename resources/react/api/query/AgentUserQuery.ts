import {useNavigate} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "react-query";
import * as api from "@/react/api/api/AgentUserApi";
import {toast} from "react-toastify";
import {useSetRecoilState} from "recoil";
import {AgentIsLoadingStates} from "@/react/app/agentApp/states/IsLoadingStates";

const useGetAllAgentUser = () => {
	return useQuery(['adminUsers'], ()=>api.getAll())
}

const useGetAgentUser = (id: number) => {
	return useQuery(['adminUser', id], ()=>api.getUser(id))
}

const useAgentUserCreate = () => {
	const setIsLoading  = useSetRecoilState(AgentIsLoadingStates)
	const navigate = useNavigate()
	return useMutation(api.create, {
		onSuccess: () => {
			setIsLoading(false)
			toast.success('登録しました')
			navigate('/admin/setting')
		},
		onError: () => {
			setIsLoading(false)
			toast.error('エラーが発生しました。')
		}
	})
}

const useAgentUserUpdate = () => {
	const setIsLoading  = useSetRecoilState(AgentIsLoadingStates)
	const queryClient = useQueryClient()
	return useMutation(api.update, {
		onSuccess: (data) => {
			queryClient.invalidateQueries(['adminUsers', 'adminUser', data.id])
			setIsLoading(false)
			toast.success('更新しました')
		},
		onError: () => {
			setIsLoading(false)
			toast.error('エラーが発生しました。')
		}
	})
}

export {
	useGetAllAgentUser,
	useGetAgentUser,
	useAgentUserCreate,
	useAgentUserUpdate,
}
