import {useNavigate} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "react-query";
import * as api from "@/react/api/api/AdminUserApi";
import {toast} from "react-toastify";
import {useSetRecoilState} from "recoil";
import {IsLoadingStates} from "@/react/app/adminApp/states/IsLoadingStates";

const useGetAllAdminUser = () => {
	return useQuery(['adminUsers'], ()=>api.getAll())
}

const useGetAdminUser = (id: number) => {
	return useQuery(['adminUser', id], ()=>api.getUser(id))
}

const useAdminUserCreate = () => {
	const setIsLoading  = useSetRecoilState(IsLoadingStates)
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

const useAdminUserUpdate = () => {
	const setIsLoading  = useSetRecoilState(IsLoadingStates)
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
	useGetAllAdminUser,
	useGetAdminUser,
	useAdminUserCreate,
	useAdminUserUpdate,
}
