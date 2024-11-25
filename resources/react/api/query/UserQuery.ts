import {useMutation, useQuery, useQueryClient} from "react-query";
import * as api from "@/react/api/api/UserApi";
import {toast} from "react-toastify";
import {useSetRecoilState} from "recoil";
import {IsAuthUserDataStates} from "@/react/app/mainApp/states/AuthStates";
import {IsLoadingStates} from "@/react/app/mainApp/states/IsLoadingStates";

const useGetPopularUsers = () => {
    return useQuery('popularUsers', ()=>api.getPopularUsers(),{
		suspense: true,
	})
}

const useGetFavoriteUsers = () => {
    return useQuery('favoriteUsers', ()=>api.getFavoriteUsers(),{
		suspense: true,
	})
}

const useGetUser = (userId: any) => {
	return useQuery(['user', userId], ()=>api.getUser(userId),{
		suspense: true,
	})
}

const useChangePassword = (setIsModalOpen: any, reset: any) => {
	const queryClient = useQueryClient()
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	return useMutation(api.changePassword, {
		onSuccess: () => {
			setIsLoading(false)
			queryClient.invalidateQueries('password')
			toast.success('パスワードを変更しました。')
			setIsModalOpen(false)
			reset()
		},
		onError: () => {
			setIsLoading(false)
			toast.error('パスワードを変更できませんでした。\n現在のパスワードをお確かめの上、再度更新してください')
		}
	})
}

const useUserUpdate = (setIsModalOpen:any) => {
	const queryClient = useQueryClient()
	const setUserData = useSetRecoilState(IsAuthUserDataStates)
	const setIsLoading = useSetRecoilState(IsLoadingStates)
	return useMutation(api.userUpdate, {
		onSuccess: (data) => {
			setIsLoading(false)
			queryClient.invalidateQueries('authUser')
			toast.success('変更しました。')
			setUserData(data)
			setIsModalOpen(false)
		},
		onError: () => {
			setIsLoading(false)
			toast.error('変更できませんでした。')
		}
	})
}

export {
    useGetPopularUsers,
    useGetFavoriteUsers,
	useGetUser,
	useChangePassword,
	useUserUpdate,
}
